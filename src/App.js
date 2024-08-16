import React, { useEffect } from 'react';
import iconHeader from './img/icon-header.png';
import photo from './img/icon.jpg';
import coding from './img/coding.png';
import walletPrint from './img/wallet-print.png';
import nottenPrint from './img/notten-print.png';
import Icons from './icons.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  useEffect(() => {

    // Feature para copiar email na área de transferência do usuário quando clicar no botão copyEmailButton
    const copyEmailButton = document.getElementById('copyEmailButton');
    if (copyEmailButton) {
      copyEmailButton.addEventListener('click', (event) => {
        event.preventDefault();
        const email = 'barbosajesse419@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
          const copyMessage = document.getElementById('copyMessage');

          // Se o usuário copiar o email, a mensagem copyMessage aparece por 2 segundos
          if (copyMessage) {
            copyMessage.style.display = 'inline';
            setTimeout(() => {
              copyMessage.style.display = 'none';
            }, 2000);
          }
          // Caso não dê certo de copiar, retorna um erro
        }).catch(err => {
          console.error('Erro ao copiar texto: ', err);
        });
      });
    }
    // Função para animar os itens
    function animateVisibleItems() {
      const project = document.querySelectorAll('.project');

      project.forEach(item => {
          const rect = item.getBoundingClientRect();
          const windowHeight = window.innerHeight || document.documentElement.clientHeight;
          if (rect.top >= 0 && rect.top <= windowHeight) {
              item.classList.add('animate');
          }
      });
  }
  // Chama a função quando o usuário rolar a tela pra baixo
  animateVisibleItems();
  window.addEventListener('scroll', animateVisibleItems);

    // Feature para direcionar o usuário a uma seção da página pelos links do nav
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });


    return () => {
      if (copyEmailButton) {
        copyEmailButton.removeEventListener('click', () => {});
      }
      navLinks.forEach(link => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="App">
      <header>
        <nav id="navbar">
          <a href="index.html" className="nav-brand me-auto">
            <img src={iconHeader} alt="icon" />
          </a>
        <ul className="nav-list mt-2 me-5">
          <li>
          <a href="#skills" className="nav-item text-light fw-semibold">HABILIDADES</a>
          </li>
          <li>
          <a href="#projects" className="nav-item text-light fw-semibold">PROJETOS</a>
          </li>
          <li>
          <a href="#about" className="nav-item text-light fw-semibold">SOBRE MIM</a>
          </li>
        </ul>
        </nav>
      </header>
      <main className="mt-5">
        <section>
          <div className="container flex-grow-1">
            <div className="row justify-content-center align-items-center mt-5">
              <div className="col-md-8 text-start">
                <p className="title text-light mt-5 mb-0">Web Developer</p>
                <p className="text-light fs-4 opacity-75 w-75">Minha paixão é criar experiências visuais incríveis que cativem os usuários na internet. 👨‍💻</p>
              </div>
              <div className="col-md-4">
                <img src={coding} alt="Coding..." height="400px"></img>
              </div>
            </div>
          </div>
        </section>
        <section id="skills">
          <h2 className=" text-light text-center fw-bolder my-4 mt-4">Minhas habilidades</h2>
          <div className="container-fluid flex-grow-1">
            <div className="row justify-content-center align-items-center mt-5">
              <div className="container-fluid">
                <div className="scrolling-banner bg-darker text-center">
                  <Icons />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="container w-75 rounded-4">
            <div className="row justify-content-center align-items-center mt-5">
                <div className="projects">
                  <div className="project mt-1">
                  <hr />
                    <div className="row">
                      <div className="col-md-9 col-12 project-description p-4">
                        <h1 className="fw-bolder text-light text-start my-5">Monyra</h1>
                          <p className="text-light fs-5">
                            Este foi meu primeiro aplicativo feito com React-native, usei PHP e JavaScript para o BackEnd, e os recursos do React-native para o FrontEnd.
                          </p>
                      </div>
                      <div className="col-md-3 align-content-end">
                      <ul>
                        <li className="list-group-item text-secondary fw-bold font-monospace my-1">Tecnologias</li>
                        <li className="list-group-item text-light">React-native, JavaScript e PHP</li>
                        <br />
                        <li className="list-group-item text-secondary fw-bold font-monospace my-1">Plataformas</li>
                        <li className="list-group-item text-light">Android e PC</li>
                      </ul>
                      </div>
                      </div>
                      <img src={walletPrint} height="20%" className="d-block w-100 rounded-4" alt="..."></img>
                  </div>
                  <div className="project">
                  <hr />
                    <div className="row">
                      <div className="col-md-9 col-12 project-description p-4">
                        <h1 className="fw-bolder text-light text-start my-5">Notten</h1>
                          <p className="text-light fs-5">
                            Este é um aplicativo Desktop de anotações feito com HTML, CSS, Bootstrap, JavaScript, e PHP para o Back-end.
                          </p>
                      </div>
                      <div className="col-md-3 align-content-end">
                      <ul>
                        <li className="list-group-item text-secondary fw-bold font-monospace my-1">Tecnologias</li>
                        <li className="list-group-item text-light">Electron, HTML, Bootstrap, CSS, JavaScript e PHP</li>
                        <br />
                        <li className="list-group-item text-secondary fw-bold font-monospace my-1">Plataformas</li>
                        <li className="list-group-item text-light">PC</li>
                      </ul>
                      </div>
                      </div>
                      <img src={nottenPrint} height="20%" className="d-block w-100 rounded-4" alt="..."></img>
                  </div>
                </div>
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <div className="container bg-darker rounded-4 py-5">
            <div className="row">
              <div className="col-md-6 text-center">
                <img className="photo" src={photo} alt="Foto de perfil"></img>
              </div>
              <div className="col-md-5 text-center">
                <h2 className="text-light fw-bolder mt-4">Sobre mim</h2>
                <p className="fw-normal text-light text-center mt-5">
                  Tenho 15 anos e atualmente moro em Teófilo Otoni - MG. Sou um estudante apaixonado por <span className="text-success">tecnologia</span>, especialmente pelo <span className="text-success"> desenvolvimento web.</span> Minha paixão é criar experiências visuais incríveis que cativem os usuários na <span className="text-success">internet.</span> 👨‍💻
                  <br />💡 Estou constantemente buscando novos desafios e <span className="text-success">oportunidades</span> de aprendizado para aprimorar minhas habilidades.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center text-light fw-semibold border-bottom border-5 border-success">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 d-flex text-start align-items-center">
              <p>Jessé Barbosa © 2024 | Todos os direitos reservados.</p>
            </div>
            <div className="icones col-md-8 d-flex justify-content-end align-items-center pb-4">
              <span id="copyMessage" className="copy-message">Copiado!</span>
              <a href="#about" id="copyEmailButton" className="icon-link icon-link-hover"><i className="bi bi-envelope-fill text-white fs-4"></i></a>
              <a href="https://github.com/jesse-barbosa" target="_blank" rel="noopener noreferrer" className="icon-link icon-link-hover"><i className="bi bi-github text-white fs-4"></i></a>
              <a href="https://www.linkedin.com/in/jesse-barbosa-moreira-129446274/" target="_blank" rel="noopener noreferrer" className="icon-link icon-link-hover"><i className="bi bi-linkedin text-white fs-4"></i></a>
              <a href="https://api.whatsapp.com/send?phone=5533984238958" target="_blank" rel="noopener noreferrer" className="icon-link icon-link-hover"><i className="bi bi-whatsapp text-white fs-4"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
