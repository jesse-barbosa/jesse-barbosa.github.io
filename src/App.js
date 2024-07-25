import icon from './icon.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="">

      </header>
      <section>
        <div className="container">
          <div className="row justify-content-center vh-100 align-content-center">
            <div className="col-6 text-center">
              <h4 className="fw-semibold text-light ">Oi! 👋 Me chamo Jessé, sou: </h4>
              <h2 className="text-success">Desenvolvedor Full-stack</h2>
              <p className="text-light opacity-75">Tenho 15 anos e atualmente moro em Teófilo Otoni - MG. Sou um estudante apaixonado por tecnologia, especialmente pelo desenvolvimento web. Minha paixão é criar experiências visuais incríveis que cativem os usuários na internet. 👨‍💻
💡 Estou constantemente buscando novos desafios e oportunidades de aprendizado para aprimorar minhas habilidades. </p>
            </div>
            <div className="col-6 text-center">
              <img src={icon} className="icon" alt="icon" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
