import { useState } from "react";
import { IoMdMenu } from "react-icons/io";


export default function NavBar() {

    const [activeClass, setActiveClass] = useState(false);

    const handleClick = () => {
        setActiveClass(!activeClass)
    }

    return (   
        <header className="header">
            <h4 className="logo">Rafael Luz</h4>
            <label className="icons">
                <button onClick={handleClick}><IoMdMenu /></button>
            </label>
            <nav className={activeClass ? 'active' : 'nav'}>
                <ul className='conteudo'>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#projects">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}