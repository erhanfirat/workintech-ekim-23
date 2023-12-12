import axios from "axios";
import { useForm } from "react-hook-form";
import { Button, Input, Label } from "reactstrap";

const LoginFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const submitHandler = (formData) => {
    console.log("Form submit edildi! ", formData);

    axios
      .post("https://reqres.in/api/user", formData)
      .then((res) => {
        console.log("Login oldu: ", res.data);
      })
      .catch((err) => {
        console.error("Login Hata: ", err);
      });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <h3>Form is {isValid ? "" : "in"}valid!</h3>
      <div>
        <Label>İsim: </Label>
        <Input type="text" {...register("name")} />
        <div></div>
      </div>

      <div>
        <label className="form-label" htmlFor="user-mail">
          Email
        </label>
        <input
          className={`form-control ${
            errors?.email?.message ? "is-invalid" : ""
          }`}
          type="email"
          // name="email"
          // value={email}
          // onChange={mailChangeHandler}
          {...register("email", {
            required: "Email alanı boş bırakılamaz!",
            email: "Email adresi hatalı.",
          })}
        />
        <div className="form-feedback">{errors?.name?.message}</div>
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className={`form-control  ${
            errors?.password?.message ? " is-invalid" : ""
          }`}
          {...register("password", {
            required: "Şifre alanı boş bırakılamaz!",
            minLength: {
              value: 8,
              message: "Şifre alanı 8 karakterden az olamaz!",
            },
          })}
          isvalid={!errors?.password?.message}
        />
        <div className="form-feedback">{errors?.password?.message}</div>
      </div>

      <button
        type="button"
        className="btn btn-secondary me-2"
        onClick={() => {}}
      >
        Reset Form
      </button>
      <Button type="submit" color="primary" disabled={!isValid}>
        Login
      </Button>
    </form>
  );
};

export default LoginFormHook;