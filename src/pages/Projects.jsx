export default function Projects() {
    return (
        <section className="projectPage">
            <div className="container">
                <h1>Meus Projetos</h1>
                <div className="box mb-5">
                    <div className="contentBox">
                        <div className="projectDesc">
                            <h4 style={{ color: 'aqua' }}>Portfolio</h4>
                            <h5>Projeto pessoal criado para apresentar meus trabalhos e habilidades aos visitantes interessados em conhecer mais sobre mim.</h5>
                            <button className="btn btn-outline-info btn-lg mt-1">Deploy</button> <button className="btn btn-outline-info btn-lg mt-1">Aplicação no Ar</button>
                        </div>
                        <div className="contentThumb">
                            <img src="/images/project1.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className="box mb-5">
                    <div className="contentBox">
                        <div className="contentThumb" >
                            <img src="/images/project2.png" alt="" />
                        </div>
                        <div className="projectDesc">
                            <h4 style={{ color: '#e017e0' }}>Pomodoro</h4>
                            <h5>Projeto pessoal criado para apresentar meus trabalhos e habilidades aos visitantes interessados em conhecer mais sobre mim.</h5>
                            <button className="btn btn-outline-info btn-lg mt-1">Deploy</button> <button className="btn btn-outline-info btn-lg mt-1">Aplicação no Ar</button>
                        </div>
                    </div>

                </div>
                <div className="box mb-5">
                    <div className="contentBox">
                        <div className="projectDesc">
                            <h4>SpaceX</h4>
                            <h5>Projeto pessoal criado para apresentar meus trabalhos e habilidades aos visitantes interessados em conhecer mais sobre mim.</h5>
                            <button className="btn btn-outline-info btn-lg mt-1">Deploy</button> <button className="btn btn-outline-info btn-lg mt-1">Aplicação no Ar</button>
                        </div>
                        <div className="contentThumb">
                            <img src="/images/project3.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className="box mb-5">
                    <div className="contentBox">
                        <div className="contentThumb" >
                            <img src="/images/project4.png" alt="" />
                        </div>
                        <div className="projectDesc">
                            <h4 style={{ color: '#e017e0' }}></h4>
                            <h5>Projeto pessoal criado para apresentar meus trabalhos e habilidades aos visitantes interessados em conhecer mais sobre mim.</h5>
                            <a href="https://github.com/rafaeldesp/estoque" className="btn btn-outline-info btn-lg mt-1">Deploy</a> <button className="btn btn-outline-info btn-lg mt-1">Aplicação no Ar</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}