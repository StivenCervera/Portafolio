import gsap, { Expo } from 'gsap'
import React, { useEffect } from 'react'
import Swal from 'sweetalert2';

import img from '../img/code.png' 

const Perfil = () => {
 
    useEffect(() => {
    gsap.to(".first", .8, {delay: .3, top: "200%", ease: Expo.easeInOut});
    gsap.to(".second", .8, {delay: .5, top: "200%", ease: Expo.easeInOut});
    gsap.to(".third", 1, {delay: .7, top: "-100%", ease: Expo.easeInOut});
    gsap.to(".four", 1, {delay: .9, top: "-100%", ease: Expo.easeInOut});

    //IMG
    gsap.from('.home__img', {opacity: 0, duration: 2, delay: 1.4, x: 60})

    // INFORMATION
    gsap.from('.home__information', {opacity: 0, duration: 3, delay: 1.7, y: 25})
    gsap.from('.anime-text', {opacity: 0, duration: 3, delay: 1.7, y: 25, ease:'expo.out', stagger: .3})

    // NAV ITEM
    gsap.from('.nav__logo', {opacity:0, duration: 3, delay: 2.5,  ease:'expo.out'});
    gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 2.5,  ease:'expo.out', stagger: .2})

    // SOCIAL
    gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 3, y: 25, ease:'expo.out', stagger: .2})
    });
    

    const PerfilOpen = () =>{
        Swal.fire({
            title: 'Mi Perfil:',
            html:`<p>Nombre: Freddy Stiben Calderon Barreto</p>
                <p>Fecha Nacimiento: 06/04/2004</p>
                <p>Direccion: Calle 70a bisa #117-16 IN188</p>
                <p>Numero Contacto: 3132286510</p>
                <p>Email: freddystibencb@gmail.com</p>
                <p>Numero Identidad: T.I1023162339</p>
                <p>Genero: M</p>`,
            
            width: 600,
            padding: '3em',
            
        })
    }

    return (
        <div>
            <div class="overlay first"></div>
            <div class="overlay second"></div>
            <div class="overlay third"></div>
            <div class="overlay four"></div>

        <main className="l-main bd-grid">
            <div className="home">
                <div className="home__information">
                    
                    <span className="home__skill anime-text popUpText" id="perfil" onClick={PerfilOpen}>Mi Perfil</span><span className="home__skill anime-text titilar"> Clic</span>
                    <p>
                        <span className="home__p anime-text">Soy Desarrollador web con un par de años de experiencia.</span><br/><br/>
                        <span className="home__p anime-text">Mis conocimientos en esta área van desde el maquetado con html,<br/> los estilos de las paginas con Css,boostrap e incluso javascript.</span><br/><br/>
                        <span className="home__p anime-text">Con todo lo relacionado a base de datos tengo un buen control de MySQL</span><br/><br/>
                        <span className="home__p anime-text">Y por ultimo pero no menos importante una gran actitud y energia!!! :D</span>
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
