import { useState, useEffect } from "react";
import Css from "./style";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home(props) {
  const URL = "http://127.0.0.1:5000/transactions";
  const [golist, setGolist] = useState("hidden");
  const [ nome, setNome ] = useState();
  const [saldo, setSaldo] = useState(0);
  const Navegar = useNavigate();
  const token = sessionStorage.tokenete;
  const header = { user: sessionStorage.user, token: sessionStorage.tokenete };
  const [transacao, setTransacao] = useState([]);
  console.log(transacao);

  useEffect(() => {
    if (!token) return (window.location.href = "/");
    axios
      .get(URL, { headers: header })
      .then((res) => {
        setTransacao(res.data);
        setSaldo(0);
        setNome(sessionStorage.nome);
        setGolist("show");
        res.data.forEach((element) => {
            let variavel = Number(element.value)
            console.log(variavel, "esse é o elemento");
          if (element.type === "credit") {
            setSaldo( saldo => saldo+variavel);
          } else {
            setSaldo(saldo => saldo-variavel);

          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function deletTran(id) {
    if (!window.confirm('Você realmente quer apagar esse registro?')) {
        return;
    }
    const header = {
      user: sessionStorage.user,
      token: sessionStorage.tokenete,
      id: id
    };
    axios
      .delete(URL, { headers: header })
      .then((res) => {
        window.location.href = "/home";
      })
      .catch((error) => {alert(error.message)
      console.log(error)
  });
  }

  function LogOut() {
    //  localStorage.removeItem(nome);
    Navegar("/");
  }

  function NovaEntrada() {
    Navegar("/novaentrada");
  }

  function NovaSaida() {
    Navegar("/novasaida");
  }

  return (
    <>
      <Css.Home>
        <Css.HomeTopo>
          <h2>Olá, {!nome? "fulano" : nome }</h2>
          <ion-icon name="enter-outline" onClick={LogOut} />
        </Css.HomeTopo>
        <Css.Registros className={golist}>
          <div className="transacoes">
            {transacao !== [] ? (
              transacao.map((q) => {
                console.log(q, "esse é o q")
                return (
                  <div data = {q._id}>
                   
                    <div>
                      <span className="data">{q.date}</span>
                      <span className="descricao">{q.description}</span>
                    </div>
                    <div>
                        <Css.Valor  type = {q.type} className="valor">{q.value}</Css.Valor>
                        <ion-icon onClick={() => {deletTran(q._id)}} name="close-outline"></ion-icon>
                    </div>
                    
                    
                  </div>
                );
              })
            ) : (
              <div>"Não há registros de entrada ou saída"</div>
            )}
          </div>
          <div className="Saldo">
            Saldo
            <span saldo={saldo}> {saldo} </span>
          </div>
        </Css.Registros>

        <Css.HomeBotton>
          <Css.HomeOffice onClick={NovaEntrada}>
            <ion-icon
              name="add-circle-outline"
              //onClick={() => {sessionStorage.removeItem('token'); window.location.reload()}}
            />
            <p>Nova entrada</p>
          </Css.HomeOffice>
          <Css.HomeOffice onClick={NovaSaida}>
            <ion-icon name="remove-circle-outline" />
            <p>Nova saída</p>
          </Css.HomeOffice>
        </Css.HomeBotton>
      </Css.Home>
    </>
  );
}
