export type DispatchPayload = Array<object> | object | string | number;

export interface Payload {
    type: string;
    payload: any;
}

export interface Action {
    type: string;
    payload: Payload;
}

type ActionCreatorFunction = (...args: any[]) => { type: string; payload: any };

type IterableObject<T> = {
    [Symbol.iterator]: () => Iterator<T>;
};

export interface ActionReducer extends Omit<Action, "payload"> {
    payload: IterableObject<DispatchPayload>;
}

type MethodTypes = {
    [key: string]: string;
};

const SET = "SET";
const REMOVE = "REMOVE";
const SHOW = "SHOW";
const CLOSE = "CLOSE";

export const createMethodTypes = (base: string) => ({
    [SET]: `${SET}_${base}`,
    [REMOVE]: `${REMOVE}_${base}`,
    [SHOW]: `${SHOW}_${base}`,
    [CLOSE]: `${CLOSE}_${base}`,
});

export const createAction = (type: string) => (payload: Payload) => ({
    type,
    payload,
});

export const generateActionCreators = (
    methodTypes: MethodTypes,
    name: string
) => {
    const actionCreators: Record<string, ActionCreatorFunction> = {};
    Object.keys(methodTypes).forEach(key => {
        const actionType = methodTypes[key];
        const keyAction = key.toLowerCase() + name;
        actionCreators[keyAction] = createAction(actionType);
    });
    return actionCreators;
};
