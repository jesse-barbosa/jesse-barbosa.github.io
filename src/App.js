import React, { useEffect } from 'react';
import iconHeader from './img/icon-header.png';
import cursor from './img/cursor.png';
import icon from './img/icon.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    let cursor = document.querySelector(".cursor");
    document.addEventListener('mousemove', (event) => {
      if (cursor) {
        cursor.style.left = event.pageX + 'px';
        cursor.style.top = event.pageY + 'px';
      }
    });
  }, []);

  return (
    <div className="App">
      <header>
        <div className="icon me-auto">
          <img src={iconHeader} className="icon-header" alt="icon" />
        </div>
        <div className="nav mt-2 me-5">
          <h5 className="nav-item text-light fw-semibold">PROJETOS</h5>
          <h5 className="nav-item text-light fw-semibold">HABILIDADES</h5>
          <h5 className="nav-item text-light fw-semibold">CONTATO</h5>
        </div>
      </header>
      <img src={cursor} className="cursor" alt="cursor" />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6 text-center">
              <h4 className="fw-semibold text-light">Oi! 👋 Me chamo Jessé, sou:</h4>
              <h2 className="text-success">Desenvolvedor Full-stack</h2>
              <p className="text-light">Tenho 15 anos e atualmente moro em Teófilo Otoni - MG. Sou um estudante apaixonado por tecnologia, especialmente pelo desenvolvimento web. Minha paixão é criar experiências visuais incríveis que cativem os usuários na internet. 👨‍💻
              💡 Estou constantemente buscando novos desafios e oportunidades de aprendizado para aprimorar minhas habilidades.</p>
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
