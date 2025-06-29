"use client"

import { useState } from "react"
import { useLanguage } from "../contexts/language-context"

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "pt", name: "Português", flag: "🇧🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷" },
    { code: "es", name: "Español", flag: "🇪🇸", warning: true },
  ]

  const currentLang = languages.find((lang) => lang.code === currentLanguage)

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="language-selector position-relative">
      <button
        className="btn btn-outline-light btn-sm d-flex align-items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
        style={{ minWidth: "120px" }}
      >
        <span>{currentLang?.flag}</span>
        <span className="d-none d-md-inline">{currentLang?.name}</span>
        <i className={`bi bi-chevron-${isOpen ? "up" : "down"}`}></i>
      </button>

      {isOpen && (
        <div
          className="language-dropdown position-absolute top-100 end-0 mt-2 bg-dark border border-secondary rounded-3 shadow-lg"
          style={{ minWidth: "200px", zIndex: 1000 }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`btn btn-link text-light w-100 text-start py-3 px-4 border-0 d-flex align-items-center gap-2 ${
                currentLanguage === lang.code ? "bg-success bg-opacity-25" : ""
              }`}
              onClick={() => handleLanguageChange(lang.code)}
              style={{ textDecoration: "none" }}
            >
              <span>{lang.flag}</span>
              <div className="flex flex-row gap-2">
                <span>{lang.name}</span>
                {lang.warning && (
                  <div className="d-block">
                    <small className="badge bg-warning text-dark mt-1">
                      <i className="bi bi-exclamation-triangle-fill me-1"></i>
                      Não revisada
                    </small>
                  </div>
                )}
              </div>
              {currentLanguage === lang.code && <i className="bi bi-check-circle-fill text-success"></i>}
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100"
          style={{ zIndex: 999 }}
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <style jsx>{`
        .language-dropdown {
          animation: slideDown 0.2s ease-out;
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .language-dropdown button:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }
      `}</style>
    </div>
  )
}

export default LanguageSelector