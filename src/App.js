import React, { useState, useEffect } from 'react';
import Icons from './components/icons.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async () => {
    if (!name || !message) {
        setResponseMessage("Por favor, preencha todos os campos.");
        return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("message", message);

    try {
        console.log("Enviando dados:", formData);

        const response = await fetch("http://jesse-barbosa.infinityfreeapp.com/save_contact.php", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data", // Importante para $_POST funcionar
            },
            body: formData,
        });

        const data = await response.json();
        console.log("Resposta do servidor:", data);
        setResponseMessage(data.message);

        if (data.success) {
            setName('');
            setMessage('');
        }
    } catch (error) {
        console.error("Erro ao enviar mensagem:", error);
        setResponseMessage("Erro ao conectar ao servidor.");
    }
};


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

  const projects = [
    {
      name: 'Monyra',
      description: 'Este foi meu primeiro aplicativo feito com React-native, usei PHP e JavaScript para o BackEnd, e os recursos do React-native para o FrontEnd.',
      technologies: ['React-native', 'JavaScript', 'PHP'],
      platforms: ['Android', 'iOS', 'PC'],
      image: '/assets/projectPrints/monyraPrint.png',
    },
    {
      name: 'Notten',
      description: 'Este é um aplicativo Desktop de anotações feito com HTML, CSS, Bootstrap, JavaScript, e PHP para o Back-end.',
      technologies: ['Electron', 'HTML', 'Bootstrap', 'CSS', 'JavaScript', 'PHP'],
      platforms: ['PC'],
      image: '/assets/projectPrints/nottenPrint.png',
    },
  ];

  return (
    <div className="App">
      <header>
        <nav id="navbar">
          <a href="index.html" className="nav-brand me-auto">
            <img src="/assets/icon.png" alt="icon" />
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
              <div className="col-md-4 text-center">
                <img src="/assets/coding.png" alt="Coding..." height="400px"></img>
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
                {projects.map((project, index) => (
                  <div key={index} className="project mt-1">
                    <hr />
                    <div className="row">
                      <div className="col-md-9 col-12 project-description p-4">
                        <h1 className="fw-bolder text-light text-start my-5">{project.name}</h1>
                        <p className="text-light fs-5">{project.description}</p>
                      </div>
                      <div className="col-md-3 align-content-end align-items-center">
                        <ul>
                          <li className="list-group-item">
                            <span className="text-secondary fw-bold font-monospace my-1">Tecnologias:</span>
                            <br />
                          </li>
                          <li className="list-group-item">
                            {project.technologies.join(', ')}
                            <br />
                            <br />
                          </li>
                          <li className="list-group-item">
                            <span className="text-secondary fw-bold font-monospace my-1">Plataforma:</span>
                          </li>
                          <li className="list-group-item">
                            {project.platforms.join(', ')}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <img src={project.image} height="20%" className="d-block w-100 rounded-4" alt="..." />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <div className="container bg-darker rounded-4 py-5">
            <div className="row">
              <div className="col-md-6 text-center">
                <img className="photo" src="/assets/photo.jpg" alt="Foto de perfil"></img>
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
        <section id="contact" className="py-5 text-light text-center">
        <div className="contactForm container p-4 rounded-3">
          <h2 className="fw-bold mb-4">Entre em Contato</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-start">
              <label htmlFor="userName" className="form-label">Nome</label>
              <input 
              type="text" 
              className="form-control" 
              id="userName" 
              placeholder="Digite seu nome" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              required 
            />
            </div>
            <div className="mb-3 text-start">
              <label htmlFor="userMessage" className="form-label">Mensagem</label>
              <textarea 
              className="form-control" 
              id="userMessage" 
              rows="4" 
              placeholder="Digite sua mensagem" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            </div>
            <button type="submit" className="btn btn-success">Enviar Mensagem</button>
            {responseMessage && <p className="mt-3">{responseMessage}</p>}
          </form>
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
