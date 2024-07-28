import React from 'react';
import iconHeader from './img/icon-header.png';
import photo from './img/icon.jpg';
import coding from './img/coding.png';
import walletPrint from './img/wallet-print.png';
import nottenPrint from './img/notten-print.png';
import Icons from './icons.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.fade-in');

    const options = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });

  return (
    <div className="App">
      <header>
        <div className="me-auto">
          <img src={iconHeader} className="icon-header" alt="icon" />
        </div>
        <div className="nav mt-2 me-5">
          <a href="#skills" className="nav-item text-light fw-semibold">HABILIDADES</a>
          <a href="#projects" className="nav-item text-light fw-semibold">PROJETOS</a>
          <a href="#about" className="nav-item text-light fw-semibold">SOBRE MIM</a>  
        </div>
      </header>
      <main className="mt-5">
        <section>
          <div className="container flex-grow-1">
            <div className="row justify-content-center align-items-center mt-5">
              <div className="col-8 text-start">
                <p className="title josefin-sans text-light mt-5 mb-0">Web Developer</p>
                <p className="josefin-sans text-light fs-4 opacity-75 w-75">Minha paixão é criar experiências visuais incríveis que cativem os usuários na internet. 👨‍💻</p>
              </div>
              <div className="col-4">
                <img src={coding} alt="Coding..." height="400px"></img>
              </div>
            </div>
          </div>
        </section>
        <section id="skills">
        <h2 className="josefin-sans text-light text-center fw-bolder my-4 mt-4 opacity-75">Minhas habilidades</h2>
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
            <div className="row justify-content-center align-items-center mt-5 px-5">
              <h2 className="josefin-sans text-light text-center fw-bolder my-4 mt-4 opacity-75">Conheça alguns dos meus projetos</h2>
              <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={walletPrint} height="600px" className="d-block w-100 rounded-4" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                      <h2 className="fw-bolder text-green">Wallet</h2>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img src={nottenPrint} height="600px" className="d-block w-100 rounded-4" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                      <h2 className="fw-bolder text-green">Notten</h2>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <div className="container bg-darker rounded-4 py-5">
            <div className="row">
              <div className="col-6 text-center">
                <img className="photo" src={photo} alt="Foto de perfil"></img>
              </div>
              <div className="col-5 text-center">
                <h2 className="josefin-sans text-light fw-bolder mt-4">Sobre mim</h2>
                <p className="josefin-sans fw-normal text-light text-center mt-5">
                  Tenho 15 anos e atualmente moro em Teófilo Otoni - MG. Sou um estudante apaixonado por <span className="text-success">tecnologia</span>, especialmente pelo <span className="text-success"> desenvolvimento web.</span> Minha paixão é criar <span className="text-success">experiências visuais </span> incríveis que cativem os usuários na <span className="text-success">internet.</span> 👨‍💻
                  <br />💡 Estou constantemente buscando novos desafios e oportunidades de aprendizado para aprimorar minhas habilidades.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center text-light fw-semibold border-bottom border-5 border-success">
        <p className="opacity-75">Jessé Barbosa © 2024 | Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
