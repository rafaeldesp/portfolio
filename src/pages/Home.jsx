import { useTypewriter, Cursor } from "react-simple-typewriter"
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {

    const [text] = useTypewriter({
        words: ['Desenvolvedor Web', 'Estudante', 'Code Lover'],
        loop: {},
        typeSpeed: 150,
        deleteSpeed: 150,
        delaySpeed: 2000,
    });

    return (
        <section className="initPage" id="home">
            <div className="conteudoHome container">
                <div className="textType">
                    <h3>Oi, eu sou</h3>
                    <h1 className="textoAnimado">Rafael Luz.
                    </h1>
                    <h2 className="h1">Eu sou um <span className="textoDigitando">{text}.</span>
                        <span>
                            <Cursor />
                        </span></h2>

                    <span><a href="https://www.linkedin.com/in/rafaelluzb/" target="blank"><FaLinkedin /></a><a href="https://github.com/rafaeldesp" target="blank"><FaGithub /></a></span>

                    
                </div>
            </div>
        </section>
    )
}