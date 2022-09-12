import axios from "axios";
import React from "react";
//import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Css from "./style";
import { UserContext } from "../index";

export default function SignIn() {
  const Global = React.useContext(UserContext) 
  const URL = "http://127.0.0.1:5000/sign-in";

  const [email, setEmail] = React.useState();
  const [senha, setSenha] = React.useState();
  const Navegar = useNavigate();

  function Entrar() {
    if (email && senha) {
      const variavel = axios
        .post(URL, { email: email, password: senha })
        .then((res) => {
          sessionStorage.tokenete = res.data;
          sessionStorage.setItem("user", email);
          Navegar('/home')
          console.log(res.data)
        })

        .catch((error) => console.log(error));
      console.log(variavel, email, senha);
    } else {
      console.log(email, senha);
    }
  }

  return (
    <UserContext.Provider>
      <Css.Tela>
        <h1> My Wallet </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Css.Input
            type="email"
            placeholder="E-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></Css.Input>
          <Css.Input
            type="password"
            placeholder="Senha"
            required
            onChange={(e) => setSenha(e.target.value)}
          ></Css.Input>
          <Css.Button type="submit" onClick={() => Entrar()}>
            Entrar
          </Css.Button>
        </form>
        
        <Link to="/sign-up"> 
        <Css.Login> Primeira vez? Cadastre-se! </Css.Login>
          </Link>
        
      
      </Css.Tela>
    </UserContext.Provider>
  );
}
