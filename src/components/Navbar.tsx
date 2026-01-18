import { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";

export default function Navbar() {

  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  }

  return (
    <header className="fixed w-full top-1 z-50">
      <nav className="navbar md:hidden">
        <div className="flex items-center gap-30 sm:gap-64">
          <a href="#">
            <img className="w-12" src="/banco-santander-logo.png" alt="Logo branca Santander" />
          </a>
          <div>
            <button className="text-white text-4xl" onClick={toggleMenu}>{isOpen ? <FiX/> : <FiAlignJustify/>}</button>
          </div>
        </div>
        <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <ul className="nav-link-list flex flex-col items-end gap-4">
            <li className="nav-link-item"><a href="inicio" className="nav-link">Início</a></li>
            <li className="nav-link-item"><a href="sobre" className="nav-link">Sobre</a></li>
            <li className="nav-link-item"><a href="experiencia" className="nav-link">Experiência</a></li>
            <li className="nav-link-item"><a href="contato" className="nav-link">Contato</a></li>
          </ul>
        </div>
      </nav>
      <nav className="navbar hidden md:flex items-center">
            <a href="#">
              <img className="w-12" src="/banco-santander-logo.png" alt=""/>
            </a>
            <ul className="nav-link-list flex gap-4">
                <li className="nav-link-item"><a href="inicio" className="nav-link">Início</a></li>
                <li className="nav-link-item"><a href="sobre" className="nav-link">Sobre</a></li>
                <li className="nav-link-item"><a href="experiencia" className="nav-link">Experiência</a></li>
                <li className="nav-link-item"><a href="contato" className="nav-link">Contato</a></li>
            </ul>
            <div>
              <img className="rounded-full w-12" src="/foto_bonita.jpg" alt=""/>
            </div>
        </nav>
    </header>
  )
}
