import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { adminLoginSchema } from "../../utils";
import { AdminLoginData } from "../../types";
import "./AdminPanel.scss";
import { useState } from "react";
import { TextFieldInput } from "../GeneralComponents/TextFieldInput";
import { useLoginStatus } from "../../hooks/useLoginStatus";
import { LoginData } from "./LoginData/LoginData";

export const AdminLoginForm = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const { setLoginStatus } = useLoginStatus();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<AdminLoginData>({
    resolver: yupResolver(adminLoginSchema),
  });

  const onSubmit = () => {
    const enteredPassword = getValues().Password;
    const enteredEmail = getValues().Email;
    setLoginStatus(true);

    if (enteredPassword === "Admin123@#") {
      navigate(`/admin/${enteredEmail}`);
    }
  };

  const tooglePasswordView = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <section className="container forms">
      <LoginData />
      <div className="form login">
        <div className="form-content">
          <header className="form-title">Administrator</header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="field input-field">
              <TextFieldInput
                id="Email"
                type="text"
                label={errors.Email ? errors.Email.message : "Email"}
                error={errors.Email}
                {...register("Email")}
              />
            </div>

            <div className="field input-field">
              <TextFieldInput
                id="Password"
                type={isPasswordVisible ? "text" : "password"}
                label={errors.Password ? errors.Password?.message : "Password"}
                {...register("Password")}
                error={errors.Email}
              />
              <i
                className="bx bx-hide eye-icon"
                style={isPasswordVisible ? { fontWeight: "bold" } : undefined}
                onClick={tooglePasswordView}
              ></i>
            </div>

            <div className="field button-field">
              <button type="submit">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
