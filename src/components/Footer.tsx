import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark">
        <div className="section-container flex flex-col items-center gap-12">
            <h2 className="section-title text-white">Contato</h2>
            <div className="flex flex-col items-start gap-12 lg:grid lg:grid-cols-3 justify-items-center lg:items-center">
                <span className="text-secondary">
                    Copyright © 2025 Gustavo M Sandoval | All Rights Reserved
                </span>
                <ul className="flex ">
                    <li className="nav-link-item"><a href="#inicio" className="nav-link">Início</a></li>
                    <li className="nav-link-item"><a href="#sobre" className="nav-link">Sobre</a></li>
                    <li className="nav-link-item"><a href="#experiencia" className="nav-link">Experiência</a></li>
                    <li className="nav-link-item"><a href="#contato" className="nav-link">Contato</a></li>
                </ul>
                <ul className="flex gap-5">
                    <li><a href="https://github.com/GustavoMSandoval" target="_blank"><FaGithub color="white" size={24}/></a></li>
                    <li><a href="https://www.linkedin.com/in/gustavomsandoval/" target="_blank"><FaLinkedin color="white" size={24} /></a></li>
                    <li><a href="https://www.youtube.com/@GustavoMSandoval" target="_blank"><FaYoutube color="white" size={24} /></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}
