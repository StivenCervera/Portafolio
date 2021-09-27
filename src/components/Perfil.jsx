import gsap, { Expo } from 'gsap'
import React, { useEffect } from 'react'
import Swal from 'sweetalert2';

import img from '../img/hacker.jpg' 

const Perfil = () => {
 
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
        
    

    const PerfilOpen = () =>{
        Swal.fire({
            title: 'Mi Perfil:',
            html:`<p>Nombre: Stiven Mateo Cervera Ramírez</p>
                <p>Fecha Nacimiento: 12/02/2004</p>
                <p>Numero Contacto: 3153768554</p>
                <p>Email: matcer2004@gmail.com</p>`,
            
            width: 600,
            padding: '3em',
            
        })
    }

    return (
        <div>
            <div class="overlay first"></div>
            <div class="overlay second"></div>

        <main className="l-main bd-grid">
            <div className="home">
                <div className="home__information">
                    
                    <span className="home__skill anime-text popUpText" id="perfil" onClick={PerfilOpen}>Mi Perfil</span><span className="home__skill anime-text titilar"> Clic</span>
                    <p>
                        <span className="home__p anime-text">Soy programador full-stack con Experiencia de 3 años desarrollando sitios y aplicaciones.</span><br/><br/>
                        <span className="home__p anime-text">Tengo experiencia en lenguajes como: 
                        <ul>
                            <li>PHP</li>
                            <li>C++</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            </ul>Java</span><br/><br/>
                        <span className="home__p anime-text">Tambien tengo conocimientos basicos en desarrollo de aplicaciones moviles y de escritorio</span><br/>
                        <span className="home__p anime-text">Y por ultimo, soy una persona responsable, puntual y ordenada</span>
                    </p>
                </div>

                <div className="home__img" >
                    <img src={img} alt="" className="imgH" />
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

export default Perfil
