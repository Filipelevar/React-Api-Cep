import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { LayoutComponents } from "../../components/LayoutComponents";
import InputMask from "react-input-mask";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [Cep, setCep] = useState("");
  const [DataNascimento, setDataNascimento] = useState("");
  const [Sobrenome, setSobrenome] = useState("");
  const inputEmail = useRef(null);
  const isFocused = inputEmail.current === document.activeElement;
  const [bolEmail, setBolEmail] = useState(false);
  const [post, setPost] = useState(null);

  const validateEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return email !== "" && email.match(regex) ? true : false;
  };

  // useEffect(() => {
  //   axios
  //     .post(urlBase, config)
  //     .then((Response) => {
  //       setPost(Response.data);
  //       console.log(post);
  //     })
  //     .catch((error) => {
  //       throw error;
  //     });
  // }, [post]);

  /* requisição para minha API porem so irei utilizar quando for 
 rendereizar as informaçoes do usuario */

  /* useEffect(() => {
    fetch("http://localhost:5000/usuario", config)
      .then((data) => data.json())
      .then((data) => setPost(data));
  }, []); */

  async function cadastroUsuario() {
    try {
      const usuario = await fetch("http://localhost:5000/usuario", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        //criar um state para o sobrenome e nacionalidade
        body: JSON.stringify({
          nome: name,
          sobrenome: Sobrenome,
          dataNascimento: DataNascimento,
          cep: Cep,
          nacionalidade: "brasil",
          email: email,
        }),
      });
      const responseJson = usuario.json();
      setPost(responseJson);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setBolEmail(validateEmail(email));
  }, [email, isFocused]);

  const handleSubmitRegister = (event) => {
    event.preventDefault();

    cadastroUsuario();
    setEmail("");
    setName("");
    setSobrenome("");
    setPassword("");
    setConfirmPassword("");
    setCep("");
    setDataNascimento("");
  };

  console.log(post);

  return (
    <LayoutComponents>
      <form
        action="submit"
        className="login-form"
        onSubmit={handleSubmitRegister}
      >
        <span className="login-form-title"> Criar Conta </span>

        <span className="login-form-title"></span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>
        <div className="wrap-input">
          <input
            className={Sobrenome !== "" ? "has-val input" : "input"}
            type="text"
            value={Sobrenome}
            onChange={(e) => setSobrenome(e.target.value)}
            required
          />
          <span className="focus-input" data-placeholder="Sobrenome"></span>
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
          {isFocused && !bolEmail && (
            <span className="span-error">
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
          <span className="focus-input" data-placeholder="Senha"></span>
        </div>

        <div className="wrap-input">
          <input
            className={confirmPassword !== "" ? "has-val input" : "input"}
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <span
            className="focus-input"
            data-placeholder="Confirme sua Senha"
          ></span>
          {password !== confirmPassword && (
            <span className="span-error">
              <b>Senhas incompatíveis</b>
            </span>
          )}
        </div>

        <div className="wrap-input">
          <InputMask
            id="input-mask"
            mask="99999-999"
            className={Cep !== "" ? "has-val input" : "input"}
            value={Cep}
            onChange={(e) => setCep(e.target.value)}
          ></InputMask>
          <span
            className="focus-input"
            data-placeholder="Digite seu Cep"
          ></span>
        </div>
        <div className="wrap-input">
          <InputMask
            id="input-mask1"
            mask="99/99/9999"
            className={DataNascimento !== "" ? "has-val input" : "input"}
            value={DataNascimento}
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
