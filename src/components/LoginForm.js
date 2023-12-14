import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";
import useInput from "../utils/hooks/useInput";

const LoginForm = () => {
  const [email, emailHandler] = useInput("");
  const [password, passwordHandler] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submit edildi! ", { email, password });

    axios
      .post("https://reqres.in/api/user", { email, password })
      .then((res) => {
        console.log("Login oldu: ", res.data);
      })
      .catch((err) => {
        console.error("Login Hata: ", err);
      });
  };

  return (
    <form onSubmit={submitHandler}>
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
      <Button type="submit" color="primary" data-testid="login-submit-btn">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
