import Css from "./style";
import { useNavigate } from "react-router-dom";


export default function EditarEntrada(){
    const Navegar = useNavigate();

    function transactions(){
        Navegar('/home');
    }

    return(
        <Css.EditarEntrada>
            
        <Css.EditarEntradaTopo><h2>Editar entrada</h2></Css.EditarEntradaTopo>
        <Css.InputSaida placeholder="Valor"></Css.InputSaida>
        <Css.InputSaida placeholder="Descrição"></Css.InputSaida>
        <Css.ButtonSaida onClick={transactions}>Editar entrada</Css.ButtonSaida>
    </Css.EditarEntrada>
    )

}