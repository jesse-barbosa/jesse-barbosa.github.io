import { useState, useEffect } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import Icons from "./components/icons.js"
import LanguageSelector from "./components/language-selector.js"
import { LanguageProvider, useLanguage } from "./contexts/language-context.js"
import { translations } from "./data/translations.js"
import { HiOutlineAcademicCap } from "react-icons/hi"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/js/bootstrap.min.js"

function AppContent() {
  const { currentLanguage } = useLanguage()
  const t = translations[currentLanguage]

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [responseMessage, setResponseMessage] = useState("")
  const [captchaValue, setCaptchaValue] = useState(null)

  const handleMessageChange = (e) => {
    if (e.target.value.length <= 1000) {
      setMessage(e.target.value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!name || !message) {
      setResponseMessage(t.contact.fillAllFields)
      return
    }
    if (!captchaValue) {
      setResponseMessage(t.contact.confirmCaptcha)
      return
    }
    const url = `http://jesse-barbosa.infinityfreeapp.com/save_contact.php?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  useEffect(() => {
    const copyEmail = () => {
      const email = "barbosajesse419@gmail.com"
      navigator.clipboard
        .writeText(email)
        .then(() => {
          const copyMessage = document.getElementById("copyMessage")
          if (copyMessage) {
            copyMessage.style.display = "inline"
            setTimeout(() => {
              copyMessage.style.display = "none"
            }, 2000)
          }
        })
        .catch((err) => {
          console.error("Erro ao copiar texto: ", err)
        })
    }

    const copyEmailButton = document.getElementById("copyEmailButton")
    if (copyEmailButton) {
      copyEmailButton.addEventListener("click", copyEmail)
    }

    const animateVisibleItems = () => {
      const projects = document.querySelectorAll(".project")
      projects.forEach((item) => {
        const rect = item.getBoundingClientRect()
        const windowHeight = window.innerHeight || document.documentElement.clientHeight
        if (rect.top >= 0 && rect.top <= windowHeight) {
          item.classList.add("animate")
        }
      })
    }

    animateVisibleItems()
    window.addEventListener("scroll", animateVisibleItems)

    return () => {
      if (copyEmailButton) {
        copyEmailButton.removeEventListener("click", copyEmail)
      }
      window.removeEventListener("scroll", animateVisibleItems)
    }
  }, [])

  const projects = [
      {
      name: "Enerium",
      description: t.projects.items[0].description,
      technologies: ["NextJS", "React-native", "TypeScript", "Python", "Laravel/PHP"],
      platforms: ["Web"],
      images: [
        "/assets/projectPrints/enerium-screenshots/intro-hero.png", 
        "/assets/projectPrints/enerium-screenshots/dash-home.png",
        "/assets/projectPrints/enerium-screenshots/dash-sustainability.png",
        "/assets/projectPrints/enerium-screenshots/intro-benefits.png", 
      ],
    },
    {
      name: "FII Trader",
      description: t.projects.items[1].description,
      technologies: ["NextJS", "NestJS"],
      platforms: ["Web"],
      images: ["/assets/projectPrints/fiiTraderPrint.png"],
    },
    {
      name: "TechMix",
      description: t.projects.items[2].description,
      technologies: ["React-native", "JavaScript", "Laravel/PHP"],
      platforms: ["Android", "iOS", "PC"],
      images: ["/assets/projectPrints/techMixPrint.png"],
    },
    {
      name: "Monyra",
      description: t.projects.items[3].description,
      technologies: ["React-native", "JavaScript", "PHP"],
      platforms: ["Android", "iOS", "PC"],
      images: ["/assets/projectPrints/monyraPrint.png"],
    },
    {
      name: "Notten",
      description: t.projects.items[4].description,
      technologies: ["Electron", "HTML", "Bootstrap", "CSS", "JavaScript", "PHP"],
      platforms: ["PC"],
      images: ["/assets/projectPrints/nottenPrint.png"],
    },
  ]

  useEffect(() => {
    const timelineItems = document.querySelectorAll(".timeline-item")

    timelineItems.forEach((item) => {
      item.addEventListener("click", () => {
        timelineItems.forEach((i) => i.classList.remove("selected"))

        item.classList.add("selected")

        const content = item.querySelector(".timeline-content")
        if (content) {
          content.style.opacity = "1"
          content.style.visibility = "visible"
        }
      })
    })

    if (timelineItems.length > 0) {
      timelineItems[0].classList.add("selected")
    }

    return () => {
      timelineItems.forEach((item) => {
        item.removeEventListener("click", () => {})
      })
    }
  }, [])

  const formations = t.formations.items

  return (
    <div className="App">
      <header>
        <nav id="navbar">
          <a href="index.html" className="nav-brand me-auto">
            <img src="/assets/icon.png" alt="icon" />
          </a>
          <ul className="nav-list mt-3">
            <li>
              <a href="#skills" className="nav-item text-light fw-semibold">
                {t.nav.skills}
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-item text-light fw-semibold">
                {t.nav.projects}
              </a>
            </li>
            <li>
              <a href="#formations" className="nav-item text-light fw-semibold">
                {t.nav.formations}
              </a>
            </li>
            <li>
              <a href="#about" className="nav-item text-light fw-semibold">
                {t.nav.about}
              </a>
            </li>
          </ul>
          <LanguageSelector />
        </nav>
      </header>

      <main className="mt-5">
        <section>
          <div className="container flex-grow-1">
            <div className="row justify-content-center align-items-center mt-5">
              <div className="col-md-8 text-start">
                <p className="title text-light mt-5 mb-0">{t.hero.title}</p>
                <p className="text-light fs-4 opacity-75 w-75">{t.hero.description}</p>
              </div>
              <div className="col-md-4 text-center">
                <img src="/assets/coding.png" alt="Coding..." height="400px"></img>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <h2 className="text-light text-center fw-bolder my-4 mt-4">{t.skills.title}</h2>
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
          <h2 className="text-light text-center fw-bold my-4">{t.projects.title}</h2>
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
                            <span className="text-secondary fw-bold font-monospace my-1">
                              {t.projects.technologies}
                            </span>
                            <br />
                          </li>
                          <li className="list-group-item">
                            {project.technologies.join(", ")}
                            <br />
                            <br />
                          </li>
                          <li className="list-group-item">
                            <span className="text-secondary fw-bold font-monospace my-1">{t.projects.platform}</span>
                          </li>
                          <li className="list-group-item">{project.platforms.join(", ")}</li>
                        </ul>
                      </div>
                    </div>
                    <div id={`carousel${index}`} className="carousel slide" data-bs-ride="carousel">
                      <div className="carousel-indicators">
                        {project.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            type="button"
                            data-bs-target={`#carousel${index}`}
                            data-bs-slide-to={imgIndex}
                            className={imgIndex === 0 ? "active" : ""}
                            aria-current={imgIndex === 0 ? "true" : "false"}
                            aria-label={`Slide ${imgIndex + 1}`}
                          ></button>
                        ))}
                      </div>
                      <div className="carousel-inner">
                        {project.images.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`carousel-item ${imgIndex === 0 ? "active" : ""}`}
                          >
                            <img
                              src={image}
                              className="d-block w-100 rounded-4"
                              alt={`Slide ${imgIndex}`}
                            />
                          </div>
                        ))}
                      </div>
                      {project.images.length > 1 && (
                        <div className="carousel-controls">
                          <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${index}`} data-bs-slide="prev">
                            <div className="carousel-interaction">
                              <span className="carousel-control-prev-icon opacity-100" aria-hidden="true"></span>
                            </div>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button className="carousel-control-next" type="button" data-bs-target={`#carousel${index}`} data-bs-slide="next">
                            <div className="carousel-interaction">
                              <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </div>
                            <span className="visually-hidden">Next</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="formations" className="py-5">
          <div className="container">
            <h2 className="text-light fw-bold text-center mb-2">{t.formations.title}</h2>
            <p className="text-secondary text-center mb-5">{t.formations.subtitle}</p>
            <ul className="timeline pt-4">
              {formations.map((formation, index) => (
                <li className={`timeline-item ${index === 0 ? "selected" : ""}`} key={index}>
                  <div className="timeline-info">
                    <h4>{formation.title}</h4>
                    <div className="flex-row">
                      <span className="location">{formation.location}</span>
                      <small>
                        {formation.period}
                        <strong style={{ marginLeft: ".5em" }}> {formation.duration}</strong>
                      </small>
                    </div>
                  </div>
                  <div className="timeline-marker">
                    <div className="timeline-icon">
                      <HiOutlineAcademicCap />
                    </div>
                  </div>
                  <div className="timeline-content">
                    <small>{formation.details}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container bg-darker rounded-4 py-5">
            <div className="row">
              <div className="col-md-6 text-center">
                <img className="photo" src="/assets/photo.jpg" alt="Foto de perfil"></img>
              </div>
              <div className="col-md-5 text-center">
                <h2 className="text-light fw-bolder mt-4">{t.about.title}</h2>
                <p
                  className="fw-normal text-light text-center mt-5"
                  dangerouslySetInnerHTML={{ __html: t.about.description }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-5 text-light text-center">
          <div className="contactForm container p-4 rounded-3">
            <h2 className="fw-bold mb-4">{t.contact.title}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 text-start">
                <label htmlFor="userName" className="form-label">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  placeholder={t.contact.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="userName" className="form-label">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  placeholder={t.contact.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="userMessage" className="form-label">
                  {t.contact.message}
                </label>
                <textarea
                  className="form-control"
                  id="userMessage"
                  rows="4"
                  placeholder={t.contact.messagePlaceholder}
                  value={message}
                  onChange={handleMessageChange}
                  required
                ></textarea>
                <div className="text-end mt-1">
                  <span style={{ color: message.length === 1000 ? "red" : "white" }}>{message.length}/1000</span>
                </div>
              </div>
              <div className="d-flex justify-content-start ms-2 m-4">
                <ReCAPTCHA
                  sitekey="6LezHuIqAAAAANgXcDH7N-YEzsuQBTMiMBfpiUaj"
                  onChange={(value) => setCaptchaValue(value)}
                  theme="dark"
                />
              </div>
              <button type="submit" className="btn btn-success">
                {t.contact.submit}
              </button>
              {responseMessage && <p className="mt-3">{responseMessage}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="text-center text-light fw-semibold border-bottom border-5 border-success">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 d-flex text-start align-items-center">
              <p>{t.footer.rights}</p>
            </div>
            <div className="icones col-md-8 d-flex justify-content-end align-items-center pb-4">
              <span id="copyMessage" className="copy-message">
                {t.footer.copied}
              </span>
              <a href="#about" id="copyEmailButton" className="icon-link icon-link-hover">
                <i className="bi bi-envelope-fill text-white fs-4"></i>
              </a>
              <a
                href="https://github.com/jesse-barbosa"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link icon-link-hover"
              >
                <i className="bi bi-github text-white fs-4"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/jesse-barbosa-moreira/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link icon-link-hover"
              >
                <i className="bi bi-linkedin text-white fs-4"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5533984238958"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link icon-link-hover"
              >
                <i className="bi bi-whatsapp text-white fs-4"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
