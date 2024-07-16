/* eslint-disable react/jsx-key */
export default function Skills( {images} ) {
    return (
        <section className="skillsPage" id="skills">
            <h1>Habilidades</h1>
            <div className="banner-wrapper">
                <div className="wrapper">
                    <div className="images">
                        {images.map(({src, name}) => (
                            <div className="image">
                                <img src={src} alt={name} />
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="images">
                        {images.map(({src, name}) => (
                            <div className="image">
                                <img src={src} alt={name} />
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>
                    <div className="images">
                        {images.map(({src, name}) => (
                            <div className="image">
                                <img src={src} alt={name} />
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}