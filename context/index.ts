import { useContext, Dispatch } from "react";

import { StoreContext, Action, InitialState } from "../store";

type SelectorFn<T> = (state: InitialState) => T;

const useSelector = <T>(selector: SelectorFn<T>): T => {
    const { state } = useContext(StoreContext);
    return selector(state);
};

const useDispatch = (): Dispatch<Action> => {
    const { dispatch } = useContext(StoreContext);
    return dispatch;
};

export { useSelector, useDispatch };
