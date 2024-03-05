import { generateActionCreators } from "../types";
import { User } from "../types/user";

const userActionCreators = generateActionCreators(User, "User");
export const { setUser } = userActionCreators;
