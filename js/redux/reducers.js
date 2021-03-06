import { combineReducers } from "redux";
import authReducer from "./modules/auth";
import quizReducer from "./modules/quiz";
import profileReducer from "./modules/profileReducer";
import companyReducer from "./modules/companyReducer";
import userReducer from "./modules/userReducer";
import { NavigationReducer } from "@expo/ex-navigation";

const rootReducer = combineReducers({
  navigation: NavigationReducer,
  auth: authReducer,
  company: companyReducer,
  user: userReducer,
  quiz: quizReducer,
  profile: profileReducer
});

export default rootReducer;
