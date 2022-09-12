import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Css from "./style";



export default function SignUp() {
  const URL = "http://localhost:5000/sign-up";
const Navegar = useNavigate();
const [ nome, setNome ] = useState();
const [ email, setEmail ] = useState();
const [ senha, setSenha ] = useState();
const [senha1, setSenha1 ] = useState();

function EnviarCadastro(){
  if(!nome || !email || !senha) return;
  if(senha === senha1){
    axios.post(URL, {
      'nome': nome,
      'email': email,
      'senha': senha,
      "senha1": senha1
    }). then( (res)=>{
      console.log(res);
      Navegar('/sign-up')
     // window.location.href='/sign-up'
      return alert("Usuário cadastrado com sucesso!")
    }).catch((error)=>{
      console.log(error);
      return alert("Deu problema no post")
    })
  }else{
    alert("As senhas não correspondem!");
  }

}
  return (
    <Css.Tela>
      <h1> My Wallet </h1>
        <form onSubmit={ (e) => {
          EnviarCadastro() 
          e.preventDefault() }}>
          <Css.Input type='name' placeholder="Nome" required onChange={(e)=>setNome(e.target.value)} />
          <Css.Input type='email' placeholder="E-mail" required onChange={(e)=>setEmail(e.target.value)}/>
          <Css.Input type='password' placeholder="Senha" required onChange={(e)=> setSenha(e.target.value)} />
          <Css.Input type='password' placeholder="Confirme a senha" required onChange={(e)=> setSenha1(e.target.value)}/> 
          <Css.Button type="submit" >Cadastrar</Css.Button>
        </form>
      { <Link to='/'> <p>Já tem uma conta? Entre agora!</p> </Link> }
   </Css.Tela>
  );
}
