import React from 'react'
import { Link } from 'react-router-dom'
import img from '../img/serpiente1.png' 

const Header = () => {
    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <Link to="" className="nav__logo"><img src={img} alt="" width="55" /></Link>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><Link to="/Portafolio/" className="nav__link">Inicio</Link></li>
                        <li className="nav__item"><Link to="/Perfil" className="nav__link">Perfil</Link></li>
                        <li className="nav__item"><Link to="/Estudios" className="nav__link">Estudios</Link></li>
                        <li className="nav__item"><Link to="/Experiencia" className="nav__link">Experiencia</Link></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <ion-icon name="menu"></ion-icon>
                </div>
            </nav>
        </header>
    )
}

export default Header
