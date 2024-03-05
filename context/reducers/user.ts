import { ActionReducer } from "../types";
import { User } from "../types/user";

export interface InitialStateUser {
  isLoggedIn: boolean;
  user?: any;
  profile?: any;
  token?: {
    accessToken?: string;
    refreshToken?: string;
  };
}

export const initialStateUser: InitialStateUser = {
  isLoggedIn: false,
  user: undefined,
  profile: undefined,
  token: {
    accessToken: undefined,
    refreshToken: undefined,
  },
};

const reducer = (state = initialStateUser, action: ActionReducer) => {
  switch (action.type) {
    case User.SET:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

const UserReducer = { reducer, initialState: initialStateUser };

export default UserReducer;
