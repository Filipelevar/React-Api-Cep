import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const inputEmail = useRef(null);
  const isFocused = inputEmail.current === document.activeElement;
  const [bolEmail, setBolEmail] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return email !== "" && email.match(regex) ? true : false;
  };

  useEffect(() => {
    setBolEmail(validateEmail(email));
  }, [email, isFocused]);

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
  };
  console.log(bolEmail, isFocused);

  return (
    <LayoutComponents>
      <form action="submit" className="login-form" onSubmit={handleSubmitLogin}>
        <span className="login-form-title"> Bem vindo </span>
        <span className="login-form-title"></span>
        <div className="wrap-input">
          <input
            ref={inputEmail}
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span className="focus-input" data-placeholder="Email"></span>
          {isFocused && !bolEmail && (
            <span className="spanMail-error-login">
              <b>Email Inválido</b>
            </span>
          )}
        </div>
        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>
        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
          <Link className="txt2" to="/"></Link>
        </div>
        <div className="text-center">
          <span className="txt1">Não possui conta? </span>
          <Link className="txt2" to="/register">
            Criar conta.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
