import {
  DEALER_DATA_REQUEST,
  DEALER_DATA_SUCCESS,
  DEALER_DATA_FAIL,
} from "./dealer.constants";

export const dealerDataReducer = (state = {}, action) => {
  switch (action.type) {
    case DEALER_DATA_REQUEST:
      return { loading: true };
    case DEALER_DATA_SUCCESS:
      return { loading: false, dealer: action.payload };
    case DEALER_DATA_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
