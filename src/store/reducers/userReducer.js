import { FetchStates } from "./productReducer";

export const UserActions = {
  setUserName: "SET_USER_NAME",
  setUserEmail: "SET_USER_EMAIL",
  setUserFetchState: "SET_USER_FETCH_STATE",
};

const userInitial = {
  name: "",
  email: "",
  theme: "light",
  language: "tr",
  fetchState: FetchStates.notFetched,
};

export const userReducer = (state = userInitial, action) => {
  switch (action.type) {
    case UserActions.setUserName:
      return { ...state, name: action.payload };

    case UserActions.setUserEmail:
      return { ...state, email: action.payload };

    case UserActions.setUserFetchState:
      return { ...state, fetchState: action.payload };

    default:
      return state;
  }
};
