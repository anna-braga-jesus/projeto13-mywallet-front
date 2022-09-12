import { useState } from "react";
import axios from "axios";
import Css from "./style";
import { useNavigate } from "react-router-dom";


export default function NovaSaida(){
    const [value, setValue] = useState();
    const [ description, setDescription] = useState();
    const Navegar = useNavigate();
    const URL = "http://127.0.0.1:5000/transactions";

    
    function transactions(){
        if (!window.confirm('Você quer salvar essa saída?')) {
			return;
		}
        if(!isNaN( Number(value) )  ){
        const variavel = axios
        .post(URL, {description: description, value: value, type:"debit" }, 
            {headers:{"Authorization": "Bearer "+ sessionStorage.tokenete}})
        }
       
        Navegar('/home')
    }

    return(
        <>
        <Css.NovaSaida>
            
            <Css.NovaSaidaTopo><h2>Nova saida</h2></Css.NovaSaidaTopo>
            <Css.InputEntrada placeholder="Valor" onChange={(e)=> setValue(e.target.value)}></Css.InputEntrada>
            <Css.InputEntrada placeholder="Descrição" onChange={(e)=> setDescription(e.target.value)}></Css.InputEntrada>
            
            <Css.ButtonEntrada onClick={transactions}>Salvar saida</Css.ButtonEntrada>
        </Css.NovaSaida>
        
        </>
    )

}
  