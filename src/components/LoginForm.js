import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Spinner } from "reactstrap";
import useInput from "../utils/hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "../store/reducers/userReducer";
import { FetchStates } from "../store/reducers/productReducer";

const LoginForm = () => {
  const [name, nameHandler] = useInput("");
  const [email, emailHandler] = useInput("");
  const [password, passwordHandler] = useInput("");
  const dispatch = useDispatch();
  const userFetchState = useSelector((s) => s.user.fetchState);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submit edildi! ", { name, email, password });

    dispatch({
      type: UserActions.setUserFetchState,
      payload: FetchStates.fetching,
    });
    setTimeout(() => {
      axios
        .post("https://reqres.in/api/user", { name, email, password })
        .then((res) => {
          console.log("Login oldu: ", res.data);
          // dispatch action göndermemiz gerekir
          dispatch({ type: UserActions.setUserName, payload: name });
          dispatch({ type: UserActions.setUserEmail, payload: email });
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
    }, 2000);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label className="form-label" htmlFor="user-name">
          Name
        </label>
        <input
          id="user-name"
          className="form-control"
          placeholder="Please write your name..."
          type="text"
          value={name}
          onChange={nameHandler}
          data-testid="user-name-input"
        />
      </div>
      <div>
        <label className="form-label" htmlFor="user-mail">
          Email
        </label>
        <input
          id="user-mail"
          className="form-control"
          placeholder="Please write your email..."
          type="email"
          value={email}
          onChange={emailHandler}
          data-testid="user-email-input"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          data-testid="user-pass-input"
          onChange={passwordHandler}
        />
      </div>

      <button
        type="button"
        className="btn btn-secondary me-2"
        onClick={() => {}}
      >
        Reset Form
      </button>
      <Button
        type="submit"
        color="primary"
        data-testid="login-submit-btn"
        disabled={userFetchState === FetchStates.fetching}
      >
        {userFetchState === FetchStates.fetching && (
          <Spinner size={"sm"} className="me-2" />
        )}
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
