const Home = () => {
    return (
        <main className="mainHome">
            <h1>Hola, soy Alberto y muchas gracias por venir</h1>
            <h1>dame trabajo </h1>

            <div className="planteamiento">
                <h2>Planteamiento: Me presento</h2>
                <p>
                    Desarrollador full stack junior. Formado como guionista, ahora capacitado en JavaScript,
                    Node.js, React, SQL, Git... En mi experiencia creativa estoy
                    acostumbrado a encontrar nuevas soluciones a problemas
                    complejos. Aqui te dejo un breve resumen de quién soy.
                </p>
            </div>

            <div className="nudo">
                <h2>Nudo: Últimos proyectos</h2>
                <div className="inno">
                    <div className="fotoproyecto">
                        <img src="/INNO.png" alt="INNO" />
                    </div>
                    <div className="innovaspace-texto">
                        <h3>INNOVASPACE</h3>
                        <p>
                            Innovaspace es el proyecto de final de nuestro
                            bootcamp full stack. Donde desarrollamos la base de
                            datos y la aplicamos al front.
                        </p>
                        <h4>Tecnologías usadas</h4>
                        <p>NODE.JS, REACT, JS, CSS, SQL</p>
                    

                        <button
                            onClick={() =>
                                window.open(
                                   "https://github.com/tu-repo-innovaspace"
                                )
                            }
                        >
                            Código
                        </button>
                    </div>
                </div>
                <hr />

                <section className="pokedex">
                    <div className="poketexto">
                        <h3>Visualizador Pokemon</h3>

                        <p>
                            El clásico de los clásicos. Una pokedex extrayendo
                            los datos de POKEAPI.
                        </p>
                        <h4>Tecnologías usadas</h4>
                        <p>NODE.JS, REACT, JS, CSS, SQL</p>
                        <button
                            onClick={() =>
                                window.open(
                                    "https://github.com/albertomartinezdelacasa/Visualizador_Pokemon"
                                )
                            }
                        >
                            Código
                        </button>
                    </div>

                    <div className="pokeimagen">
                        <img src="/pokedex.png" alt="Pokemon" />
                    </div>
                </section>
                    <h3>y los que estan en proceso...</h3>
            </div>

            <div className="desenlace">
                <h2>DESENLACE</h2>
                <div className="otras">
                    <div>
                        <section className="podcast">
                            <img src="/PYP.jpg" alt="PYP" />
                            <p>
                                Tengo un podcast de los simpsons. Proletario y
                                Parasito. Lo que empezó como una broma ahora tiene miles de seguidores.
                            </p>
                        </section>
                        <section className="comedy">
                            <img className="alberto" src="/alberto.png" />

                            <p>Hago stand-up comedy en Madrid. Hay pocas cosas hablando en público que no me hayan pasado ya.</p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
        
    );
};

export default Home;
