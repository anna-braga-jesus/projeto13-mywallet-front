import ReactDOM from "react-dom";
import React from "react";
import './Components/GlobalStyles.css'
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Components/SignIn.jsx"; //Entrar, login
import SignUp from "./Components/SignUp.jsx"; //Inscrever-se, cadastrar
import Home from "./Components/Home.jsx"; 
import NovaEntrada from "./Components/NovaEntrada.jsx";
import NovaSaida from "./Components/NovaSaida.jsx";
import EditarEntrada from "./Components/EditarEntrada.jsx";
import EditarSaida from "./Components/EditarSaida.jsx";

 export const UserContext = React.createContext("value");

function App() {

    const [token, setToken] = useState();
  return (
    <UserContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
           <Route path="/home" element={<Home />} /> 
           <Route path='/novaentrada' element= { <NovaEntrada/>} /> 
           <Route path='/novasaida' element= { <NovaSaida/>} /> 
           <Route path='/editarentrada' element= { <EditarEntrada/>} />
           <Route path='/editarsaida' element= { <EditarSaida/>} />  
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));

