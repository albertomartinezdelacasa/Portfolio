const Header = () => {
    const subirarriba = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <header className="header">
            <nav>
                <ul>
                    <a href="https://www.linkedin.com/in/alberto-martinez-de-la-casa-graupera/" target="_blank" rel="noopener noreferrer">
                        <img
                            className="linkedin"
                            src="/public/linkedin.png"
                        />
                    </a>
                    <li>
                        <a href="#inicio" onClick={subirarriba}>
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#proyectos">Proyectos</a>
                    </li>
                    <li>
                        <a href="#desenlace">Sobre mí</a>
                    </li>
                    <li>
                        <a href="#contacto">Contacto</a>
                    </li>
                    <a href="https://github.com/albertomartinezdelacasa" target="_blank" rel="noopener noreferrer">
                        <img
                            className="github"
                            src="/public/github.png"
                        />
                    </a>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
