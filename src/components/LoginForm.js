import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "reactstrap";

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
    // ?
  };

  const passwordChangeHandler = (e) => {
    // todo: inputtaki value yu email state ine yaz
    console.log("input change event > ", e);
    setPassword(e.target.value);
  };

  useEffect(() => {
    // güncel email değeri
    console.log("LoginForm > Email state i Güncellendi: ", email);
  }, [email]);

  useEffect(() => {
    // component did mount
    console.log("LoginForm Yüklendi | Component Did Mount!");

    return () => {
      // component will unmount
      console.log("LoginForm kaldırıldı!");
    };
  }, []);

  useEffect(() => {
    // component did update
    // email, password
    console.log("LoginForm Güncellendi | Component Did Update!");
  });

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label className="form-label" htmlFor="user-mail">
          Email
        </label>
        <input
          id="user-mail"
          className="form-control"
          type="email"
          value={email}
          onChange={mailChangeHandler}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={passwordChangeHandler}
        />
      </div>

      <button
        type="button"
        className="btn btn-secondary me-2"
        onClick={() => {
          setEmail("");
          setPassword("");
        }}
      >
        Reset Form
      </button>
      <Button type="submit" color="primary">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
