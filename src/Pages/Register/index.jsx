// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { LayoutComponents } from "../../components/LayoutComponents";
// import InputMask from "react-input-mask";

// export const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [Cep, setCep] = useState("");
//   const [DataNascimento, setDataNascimento] = useState("");

//   function validateEmail(email) {
//     const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
//     if (email !== "" && email.match(regex)) {
//       setEmail(email);
//     }
//     return false;
//   }

//   // useEffect(() => {
//   //   fetch('http://localhost:5000').then((data) => {
//   //     return data.json()
//   //   })
//   //     .then((data) => {
//   //       console.log(data)
//   //     })
//   // }, [])

//   useEffect(() => {
//     fetch("http://localhost:5000")
//       .then((data) => data.json())
//       .then((data) => console.log(data));
//   }, []);

//   return (
//     <LayoutComponents>
//       <form className="login-form">
//         <span className="login-form-title"> Criar Conta </span>

//         <span className="login-form-title"></span>

//         <div className="wrap-input">
//           <input
//             className={name !== "" ? "has-val input" : "input"}
//             type="email"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <span className="focus-input" data-placeholder="Nome Completo"></span>
//         </div>

//         <div className="wrap-input">
//           <input
//             className={email !== "" ? "has-val input" : "input"}
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <span className="focus-input" data-placeholder="Email"></span>
//         </div>

//         <div className="wrap-input">
//           <input
//             className={password !== "" ? "has-val input" : "input"}
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <span className="focus-input" data-placeholder="Password"></span>
//         </div>
//         <div className="wrap-input">
//           <InputMask
//             id="input-mask"
//             mask="99999-999"
//             className={Cep !== "" ? "has-val input" : "input"}
//             value={Cep}
//             onChange={(e) => setCep(e.target.value)}
//           ></InputMask>
//           <span
//             className="focus-input"
//             data-placeholder="Digite seu Cep"
//           ></span>
//         </div>
//         <div className="wrap-input">
//           <InputMask
//             id="input-mask"
//             mask="99/99/9999"
//             className={DataNascimento !== "" ? "has-val input" : "input"}
//             value={DataNascimento}
//             onChange={(e) => setDataNascimento(e.target.value)}
//           ></InputMask>
//           <span
//             className="focus-input"
//             data-placeholder="Data de Nascimento"
//           ></span>
//         </div>

//         <div className="container-login-form-btn">
//           <button className="login-form-btn">Register</button>
//         </div>

//         <div className="text-center">
//           <span className="txt1">Já possui conta? </span>
//           <Link className="txt2" to="/">
//             Acessar com Email e Senha.
//           </Link>
//         </div>
//         <div></div>
//       </form>
//     </LayoutComponents>
//   );
// };

// import { Link } from "react-router-dom";
// import { useEffect, useState, useRef } from "react";
// import { LayoutComponents } from "../../components/LayoutComponents";
// import InputMask from "react-input-mask";

// export const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [Cep, setCep] = useState("");
//   const [DataNascimento, setDataNascimento] = useState("");
//   const inputEmail = useRef(null);
//   const isFocused = inputEmail.current === document.activeElement;
//   const [bolEmail, setBolEmail] = useState(false);

//   const validateEmail = (email) => {
//     const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
//     return email !== "" && email.match(regex) ? true : false;
//   };

//   useEffect(() => {
//     setBolEmail(validateEmail(email));
//     console.log("focus", isFocused);
//   }, [email, isFocused]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };

//   return (
//     <LayoutComponents>
//       <form action="submit" className="login-form" onSubmit={handleSubmit}>
//         <span className="login-form-title"> Criar Conta </span>

//         <span className="login-form-title"></span>

//         <div className="wrap-input">
//           <input
//             className={name !== "" ? "has-val input" : "input"}
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <span className="focus-input" data-placeholder="Nome Completo"></span>
//         </div>

//         <div className="wrap-input">
//           <input
//             ref={inputEmail}
//             className={email !== "" ? "has-val input" : "input"}
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <span className="focus-input" data-placeholder="Email"></span>
//           {isFocused && !bolEmail && <span>email inválido</span>}
//         </div>

//         <div className="wrap-input">
//           <input
//             className={password !== "" ? "has-val input" : "input"}
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <span className="focus-input" data-placeholder="Password"></span>
//         </div>
//         <div className="wrap-input">
//           <InputMask
//             id="input-mask"
//             mask="99999-999"
//             className={Cep !== "" ? "has-val input" : "input"}
//             value={Cep}
//             onChange={(e) => setCep(e.target.value)}
//           ></InputMask>
//           <span
//             className="focus-input"
//             data-placeholder="Digite seu Cep"
//           ></span>
//         </div>
//         <div className="wrap-input">
//           <InputMask
//             id="input-mask"
//             mask="99/99/9999"
//             className={DataNascimento !== "" ? "has-val input" : "input"}
//             value={DataNascimento}
//             onChange={(e) => setDataNascimento(e.target.value)}
//           ></InputMask>
//           <span
//             className="focus-input"
//             data-placeholder="Data de Nascimento"
//           ></span>
//         </div>

//         <div className="container-login-form-btn">
//           <button type="submit" className="login-form-btn">
//             Register
//           </button>
//         </div>

//         <div className="text-center">
//           <span className="txt1">Já possui conta? </span>
//           <Link className="txt2" to="/">
//             Acessar com Email e Senha.
//           </Link>
//         </div>
//         <div></div>
//       </form>
//     </LayoutComponents>
//   );
// };

import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";
import InputMask from "react-input-mask";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const inputEmail = useRef(null);
  const isFocused = inputEmail.current === document.activeElement;
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidCep, setIsValidCep] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    return email !== "" && regex.test(email);
  };

  const validateCep = (cep) => {
    const regex = /^[0-9]{5}-?[0-9]{3}$/;
    return cep !== "" && regex.test(cep);
  };

  useEffect(() => {
    setIsValidEmail(validateEmail(email));
    setIsValidCep(validateCep(cep));
    console.log("focus", isFocused);
  }, [email, cep, isFocused]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Additional registration logic
  };

  return (
    <LayoutComponents>
      <form action="submit" className="login-form" onSubmit={handleSubmit}>
        <span className="login-form-title">Criar Conta</span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span className="focus-input" data-placeholder="Nome Completo"></span>
        </div>

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
          {isFocused && !isValidEmail && <span>Email inválido</span>}
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="wrap-input">
          <InputMask
            id="input-mask"
            mask="99999-999"
            className={cep !== "" ? "has-val input" : "input"}
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          ></InputMask>
          <span
            className="focus-input"
            data-placeholder="Digite seu CEP"
          ></span>
          {!isValidCep && <span>CEP inválido</span>}
        </div>

        <div className="wrap-input">
          <InputMask
            id="input-mask"
            mask="99/99/9999"
            className={dataNascimento !== "" ? "has-val input" : "input"}
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
          ></InputMask>
          <span
            className="focus-input"
            data-placeholder="Data de Nascimento"
          ></span>
        </div>

        <div className="container-login-form-btn">
          <button type="submit" className="login-form-btn">
            Register
          </button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/">
            Acessar com Email e Senha.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  );
};
