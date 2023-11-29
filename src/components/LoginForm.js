import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const mailChangeHandler = (e) => {
    // todo: inputtaki value yu email state ine yaz
    console.log("input change event > ", e);
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    // todo: inputtaki value yu email state ine yaz
    console.log("input change event > ", e);
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="user-mail">Email</label>
        <input
          id="user-mail"
          type="email"
          value={email}
          onChange={mailChangeHandler}
        />
      </div>
      <div>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </label>
      </div>

      <button
        type="button"
        onClick={() => {
          setEmail("");
          setPassword("");
        }}
      >
        Reset Form
      </button>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;