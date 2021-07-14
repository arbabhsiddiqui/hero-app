import { combineReducers } from "redux";

// import reducers
import { userLoginReducer, userDetailsReducer } from "./user/user.reducer";
import { dealerDataReducer } from "./dealer/dealer.reducer";

const RootReducer = combineReducers({
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  dealerData: dealerDataReducer,
});

export default RootReducer;
