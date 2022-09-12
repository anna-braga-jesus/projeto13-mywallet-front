import Css from "./style";
import { useNavigate } from "react-router-dom";


export default function EditarSaida(){
    const Navegar = useNavigate();

    function transactions(){
        Navegar('/home');
    }

    return(
        <Css.EditarSaida>
            
        <Css.EditarSaidaTopo><h2>Editar saida</h2></Css.EditarSaidaTopo>
        <Css.InputSaida placeholder="Valor"></Css.InputSaida>
        <Css.InputSaida placeholder="Descrição"></Css.InputSaida>
        <Css.ButtonSaida onClick={transactions}>Editar saida</Css.ButtonSaida>
    </Css.EditarSaida>
    )

}