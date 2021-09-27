import gsap, { Expo } from 'gsap';
import React, { useEffect } from 'react'

const Estudios = () => {

    useEffect(() =>  {
        gsap.to(".first", {delay: 1, duration:2, left: "-200%", ease: Expo.easeInOut});
        gsap.to(".second",{delay: 1, duration:2, left: "200%", ease: Expo.easeInOut});
    
        //IMG
        gsap.from('.home__img', {opacity: 0, duration: 2, delay: 1.4, x: 60})
    
        // INFORMATION
        gsap.from('.home__information', {opacity: 0, duration: 3, delay: 1.7, y: 25})
        gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 1.7, y: 25, ease:'expo.out', stagger: .3})
    
        // NAV ITEM
        gsap.from('.nav__logo', {opacity:0, duration: 3, delay: 2.5,  ease:'expo.out'});
        gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 2.5, ease:'expo.out', stagger: .2})
    
        // SOCIAL
        gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 3, y: 25, ease:'expo.out', stagger: .2})
        });
        
    
        return (
            <div>
                <div class="overlay first"></div>
                <div class="overlay second"></div>

        <main className="l-main bd-grid">
            <div className="home">
                <div className="home__divGrande">
                   <div className="home__information">
                       <ul>
                        <li><span className="home__skill anime-text">Formacion Académica</span><br/><br/></li>
                        <li><span className="home__normal anime-text">I.E.D. Jorge Gaitan Cortes - Primaria</span><br/><br/></li>
                        <li><span className="home__normal anime-text">I.E.D. Republica de China - Bachillerato</span><br/><br/></li>
                        <li><span className="home__normal anime-text">Tecnico de Programacion de Software - SENA 2019 - 2020</span><br/><br/></li>
                            <li><span className="home__normal anime-text">Diplomado en Programacion Web - El Bosque 2021 - </span></li>
                        
                        
                        
                        </ul>
                    </div>

                    
                   <div className="home__information">
                        <span className="home__skill anime-text">Proyeccion:</span><br/><br/>
                        <span className="home__pressent anime-text">Mi proyeccion a futuro es tener como ingenieria definida un enfoque hacia la informatica, con especializacion en IA o Machine Learning.<br/> Tambien me interesa tener enfoques en desarrollo de aplicaciones de escritorio y de videojuegos</span>
                    </div>
                </div>

                
                
                <div className="home__social">
                    <a href="https://www.facebook.com/profile.php?id=100016167039922"><ion-icon name="logo-facebook" class="home__social-icon"></ion-icon></a>
                    <a href="https://www.facebook.com/profile.php?id=100016167039922"><ion-icon name="logo-instagram" class="home__social-icon"></ion-icon></a>
                    <a href="https://www.facebook.com/profile.php?id=100016167039922"><ion-icon name="logo-twitter" class="home__social-icon"></ion-icon></a>
                </div>

            </div>
        </main>
        </div>
    )
}

export default Estudios
