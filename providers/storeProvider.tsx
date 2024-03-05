"use client";

import React, { useReducer, useMemo, useEffect } from "react";
import { rootReducer, StoreContext, initialState } from "../store";

const WHITELIST_KEYS = [] as const;

function StoreContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    const savedState = localStorage.getItem("appState");
    if (savedState) {
      const parsedState = JSON.parse(savedState);
      dispatch({ type: "RESTORE_STATE", payload: parsedState });
    }
  }, []);

  useEffect(() => {
    const stateToSave: any = {};
    for (const key of WHITELIST_KEYS) {
      stateToSave[key] = state[key];
    }
    localStorage.setItem("appState", JSON.stringify(stateToSave));
  }, [state]);

  const context = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <StoreContext.Provider value={context}>{children}</StoreContext.Provider>
  );
}

export default StoreContextProvider;
