import styled from "styled-components";

const Css = {
  Tela: styled.div`
    background: #8c11be none repeat scroll 0% 0%;
    padding: 52px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    -moz-box-align: center;
    -moz-box-pack: center;
    justify-content: center;
    h1 {
      font-family: "Saira Stencil One", cursive;
      font-size: 32px;
      font-weight: 400;
      margin-bottom: 30px;
      color: #ffffff;
    }
    p {
      font-family: "Raleway", sans-serif;
      font-weight: 700;
      font-size: 15px;
      color: #ffffff;
    }
  `,

  Input: styled.input`
    border-radius: 4px;
    box-sizing: border-box;
    width: 90%;
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 1rem;
    ::placeholder{
        color: black;
        font-family: "Raleway", sans-serif;
        font-size: 20px;
        font-weight: 400;


    }
  `,
  InputEntrada: styled.input`
    height: 58px;
    border-radius: 5px;
    font-size: 26px;
    box-sizing: border-box;
    width: 90%;
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 1rem;

    ::placeholder {
      font-family: "Raleway", sans-serif;
      font-size: 20px;
      font-weight: 400;
    }
  `,
  InputSaida: styled.input`
    height: 58px;
    border-radius: 5px;
    font-size: 26px;
    box-sizing: border-box;
    width: 90%;
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 1rem;

    ::placeholder {
      font-family: "Raleway", cursive;
      font-size: 20px;
      font-weight: 400;
    }
  `,
  Button: styled.button`
    border-radius: 4px;
    box-sizing: border-box;
    width: 90%;
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 1rem;
    cursor: pointer;
    background: #a328d6;
    color: #ffffff;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 700;
  `,
  ButtonEntrada: styled.button`
    height: 48px;
    border-radius: 5px;
    box-sizing: border-box;
    width: 90%;
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 1rem;
    background: #a328d6;
    color: #fff;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  `,
  ButtonSaida: styled.button`
    height: 48px;
    border-radius: 5px;
    box-sizing: border-box;
    width: 90%;
    border: none;
    outline: none;
    padding: 10px;
    margin-bottom: 1rem;
    background: #a328d6;
    color: #fff;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    font-weight: 700;
  `,

  Registros: styled.div`
    height: 65%;
    background: #ffffff;
    font-family: "Raleway", sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #868686;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px;
    overflow-y: auto;
    &.hidden>div{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.show>div{ 

    &.transacoes{
      width: 100%;
      height: 90%;
      display: flex;
      flex-direction: column;
      span { font-size: 2rem }
      span.date {color:lightgray }
      span.descricao { color: black;
      margin-left: 10px;}
      &>div{
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }
    &.Saldo{
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: space-between;
      font-weight: bold;
      font-size: 1.5rem;
      span{
        font-weight: 400;
           color: ${(props) => (props.saldo >= 0 ? '#C70000' : '#03AC00')};   
      }

    }

  }
  `,


  Valor: styled.span`
  color: ${props => props.type==="credit" ? "#03AC00": "#C70000"};
  
  `,
  HomeBotton: styled.div`
    height: 25%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  `,
  HomeOffice: styled.div`
    width: 45%;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    border-radius: 4px;
    padding: 10px;
    background-color: #a328d6;
    ion-icon {
      width: 43px;
      height: 44px;
      color: #ffffff;
    }
    p {
      font-size: 20px;
    }
  `,

  HomeTopo: styled.div`
    height: 10%;
    display: flex;
    justify-content: space-between;
    h2 {
      font-family: "Raleway", sans-serif;
      font-size: 26px;
      font-weight: 700;
      text-align: left;
      height: 31px;
      width: 141px;
      color: #ffff;
    }
    ion-icon {
      height: 34px;
      width: 33px;
      color: #ffff;
    }
  `,
  Home: styled.div`
    background: #8c11be none repeat scroll 0% 0%;
    padding: 22px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    //-moz-box-align: center;
    //-moz-box-pack: center;
    justify-content: center;
    h1 {
      font-family: "Saira Stencil One", cursive;
    }
    p {
      font-family: "Raleway", sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: #ffffff;
    }
  `,

  NovaEntrada: styled.div`
    background: #8c11be none repeat scroll 0% 0%;
    padding: 22px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    //-moz-box-align: center;
    //-moz-box-pack: center;
    justify-content: center;
    h1 {
      font-family: "Saira Stencil One", cursive;
    }
    p {
      font-family: "Raleway", sans-serif;
      font-weight: 700;
      font-size: 15px;
      color: #ffffff;
    }
  `,
  NovaEntradaTopo: styled.div`
    height: 5%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    h2 {
      font-family: "Raleway", sans-serif;
      font-size: 26px;
      font-weight: 700;
      text-align: center;
      color: #ffff;
    }
    ion-icon {
      height: 34px;
      width: 33px;
    }
  `,
  NovaSaida: styled.div`
    background: #8c11be none repeat scroll 0% 0%;
    padding: 22px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    //-moz-box-align: center;
    //-moz-box-pack: center;
    justify-content: center;
    h1 {
      font-family: "Saira Stencil One", cursive;
    }
    p {
      font-family: "Raleway", sans-serif;
      font-weight: 700;
      font-size: 15px;
      color: #ffffff;
    }
  `,
  NovaSaidaTopo: styled.div`
    height: 5%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    h2 {
      font-family: "Raleway", sans-serif;
      font-size: 26px;
      font-weight: 700;
      text-align: center;
      color: #ffff;
    }
    ion-icon {
      height: 34px;
      width: 33px;
    }
  `,
  EditarSaida: styled.div`
    background: #8c11be none repeat scroll 0% 0%;
    padding: 22px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    //-moz-box-align: center;
    //-moz-box-pack: center;
    justify-content: center;
    h1 {
      font-family: "Saira Stencil One", cursive;
    }
    p {
      font-family: "Raleway", sans-serif;
      font-weight: 700;
      font-size: 15px;
      color: #ffffff;
    }
  `,
  EditarSaidaTopo: styled.div`
    height: 5%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    h2 {
      font-family: "Raleway", sans-serif;
      font-size: 26px;
      font-weight: 700;
      text-align: center;
      color: #ffff;
    }
    ion-icon {
      height: 34px;
      width: 33px;
    }
  `,
  EditarEntrada: styled.div`
    background: #8c11be none repeat scroll 0% 0%;
    padding: 22px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    //-moz-box-align: center;
    //-moz-box-pack: center;
    justify-content: center;
    h1 {
      font-family: "Saira Stencil One", cursive;
    }
    p {
      font-family: "Raleway", sans-serif;
      font-weight: 700;
      font-size: 15px;
      color: #ffffff;
    }
  `,
  EditarEntradaTopo: styled.div`
    height: 5%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    h2 {
      font-family: "Raleway", sans-serif;
      font-size: 26px;
      font-weight: 700;
      text-align: center;
      color: #ffff;
    }
    ion-icon {
      height: 34px;
      width: 33px;
    }
  `,
  Login: styled.div`
    color: #fff;
    font-family: "Raleway", sans-serif;
    font-size: 15px;
    font-weight: 700;
  `,
};

export default Css;
