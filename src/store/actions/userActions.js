import { UserActions } from "../reducers/userReducer";
import { FetchStates } from "../reducers/productReducer";
import { API, renewAPI } from "../../api/api";

const token =
  "kd8hVmOk=WTY5Rh9NGgw-tts7LQx6i-!zhFEBu64IpRQ2jqtDaiPpgMiqaNLa?qY";

export const loginUserActionCreator = (formData) => (dispatch, getState) => {
  dispatch({
    type: UserActions.setUserFetchState,
    payload: FetchStates.fetching,
  });
  API.post("https://reqres.in/api/user", formData)
    .then((res) => {
      console.log("Login oldu: ", res.data);
      // dispatch action göndermemiz gerekir
      // token bilgisi ilk defa burada yakalanacak
      // 1 - local storage a yaz
      localStorage.setItem("token", token);
      // 2 - axios > headers > authorization
      renewAPI();

      dispatch(setUserNameActionCreator(formData.name));
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

export const setUserNameActionCreator = (newUserName) => ({
  type: UserActions.setUserName,
  payload: newUserName,
});
