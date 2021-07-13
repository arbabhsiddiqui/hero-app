import { combineReducers } from "redux";

// import reducers
import { userLoginReducer, userDetailsReducer } from "./user/user.reducer";

const RootReducer = combineReducers({
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
});

export default RootReducer;
