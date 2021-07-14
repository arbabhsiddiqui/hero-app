import {
  DEALER_DATA_REQUEST,
  DEALER_DATA_SUCCESS,
  DEALER_DATA_FAIL,
} from "./dealer.constants";

import axios from "axios";

export const getDealer = (Token) => async (dispatch) => {
  try {
    dispatch({ type: DEALER_DATA_REQUEST });

    const config = {
      headers: {
        // "Content-Type": "application/json",
        Authorization: Token,
      },
    };

    const { data } = await axios.get(
      "https://digihive.co.in/heroapinew/index.php/ManageDealer/getDealer",
      config
    );

    dispatch({
      type: DEALER_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DEALER_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
