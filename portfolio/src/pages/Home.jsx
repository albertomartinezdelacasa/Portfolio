const Home = () => {
    return (
        <main className="mainHome">
            <h1>¡Hola! Aquí Alberto. </h1>

            <div className="planteamiento">
                <h2 id="planteamiento">Planteamiento: Me presento</h2>
                <hr />
                <p>
                    Alberto (1993) Desarrollador full stack. Formado como
                    guionista, ahora capacitado en JavaScript, Node.js, React,
                    SQL, Git... En mi experiencia creativa (aunque suena a Liam
                    Neeson en Venganza) he desarrollado una serie de facultades
                    especiales ante problemas complejos. Acostumbrado a
                    encontrar nuevas soluciones a problemas.
                </p>
                <p>
                    <strong>Aquí te dejo un breve resumen de quién soy.</strong>
                </p>
            </div>

            <div className="nudo">
                <h2 id="proyectos">Nudo: Últimos proyectos</h2>
                <hr />

                <div className="inno">
                    <div className="fotoproyecto">
                        <img src="/INNO.png" alt="INNO" />
                    </div>
                    <div className="innovaspace-texto">
                        <h3>INNOVASPACE</h3>
                        <p>
                            Innovaspace es el proyecto de final de
                            nuestro bootcamp full stack. Donde
                            desarrollamos la base de datos y la
                            aplicamos al front.
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

                <hr />
                <h3>y los que están en proceso...</h3>
            </div>

            <div className="desenlace">
                <h2 id="desenlace">Desenlace: otras cosas de mí</h2>
                <hr />
                <div className="otras">
                    <div className="imagenes-contenedor">
                        <section className="podcast">
                            <img src="/PYP.jpg" alt="PYP" />
                            <p>
                                Tengo un podcast de Los Simpsons. Proletario y
                                Parásito. Lo que empezó como una broma ahora
                                tiene miles de seguidores. Puedo relacionar
                                cualquier cosa con la serie.
                            </p>
                        </section>
                        <section className="comedy">
                            <img
                                className="alberto"
                                src="/alberto.png"
                                alt="Alberto"
                            />
                            <p>
                                Hago stand-up comedy en Madrid. Hay pocas cosas
                                hablando en público que no me hayan pasado ya.
                            </p>
                        </section>
                    </div>
                </div>
                <hr />
            </div>
        </main>
    );
};

export default Home;
