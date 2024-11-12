const Header = () => {
    return (


        <header className="header">

            <nav>
                <ul>
                <img  className="linkedin" src="/public/linkedin.png"/>
                    <li>
                        <a href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="/proyectos">Proyectos</a>
                    </li>
                    <li>
                        <a href="/contacto">sobremi</a>
                    </li>
                    <li>
                        <a href="/contacto">Contacto</a>
                    </li>
                <img  className="github" src="/public/github.png"/>
                </ul>
            </nav>
        </header>
    );
};

export default Header;