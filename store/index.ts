import { createContext, Dispatch, Context } from "react";

import { Payload } from "../context/types";
import userReducer, {
    InitialStateUser,
    initialStateUser,
} from "@/context/reducers/user";

type Action = Payload;

interface InitialState {
    user: InitialStateUser;
}

interface StoreContextType {
    state: InitialState;
    dispatch: Dispatch<Action>;
}

const initialState: InitialState = {
    user: initialStateUser,
};
const restoreReducer = (_state: InitialState, _action: Action) => {
    if (_action.type === "RESTORE_STATE") {
        return {
            ..._state,
            ..._action.payload,
        };
    }
    return {};
};
const rootReducer = (_state: InitialState, _action: Action) => ({
    ..._state,
    user: { ..._state.user, ...userReducer.reducer(_state.user, _action) },
    ...restoreReducer(_state, _action),
});

// Create the context with the defined type
const StoreContext: Context<StoreContextType> = createContext<StoreContextType>(
    {
        state: initialState,
        dispatch: () => null,
    }
);

export type { Action, InitialState };

export { StoreContext, rootReducer, initialState };
