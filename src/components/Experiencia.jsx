import gsap, { Expo } from 'gsap';
import React, { useEffect } from 'react'

const Experiencia = () => {

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
                        
                        <span className="home__skill anime-text">Experiencia <br/> Laboral</span>
                        <p>
                            <span className="home__p anime-text">Ninguna</span>
                        </p>
                    </div>
                    
                    <div className="home__information">
                        
                        <span className="home__skill anime-text">Experiencia <br/> Academica</span>
                        <p>
                            <span className="home__pressent anime-text">Certificados SENA //(Certificados)</span>
                        </p>
                    </div>
                    <div className="home__information">
                        
                        <span className="home__skill anime-text">Experiencia <br/> fuera del area</span>
                        <p>
                            //(Lo mismo de la anterior)
                            
                        </p>
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

export default Experiencia
