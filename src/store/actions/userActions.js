import axios from "axios";
import { UserActions } from "../reducers/userReducer";
import { FetchStates } from "../reducers/productReducer";

export const loginUserActionCreator = (formData) => (dispatch, getState) => {
  dispatch({
    type: UserActions.setUserFetchState,
    payload: FetchStates.fetching,
  });
  axios
    .post("https://reqres.in/api/user", formData)
    .then((res) => {
      console.log("Login oldu: ", res.data);
      // dispatch action göndermemiz gerekir
      dispatch({ type: UserActions.setUserName, payload: formData.name });
      dispatch({ type: UserActions.setUserEmail, payload: formData.email });
      dispatch({
        type: UserActions.setUserFetchState,
        payload: FetchStates.fetched,
      });
    })
    .catch((err) => {
      console.error("Login Hata: ", err);
      dispatch({
        type: UserActions.setUserFetchState,
        payload: FetchStates.failed,
      });
    });
};
