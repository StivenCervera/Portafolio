import gsap, { Expo } from 'gsap';
import React, { useEffect } from 'react'

const Experiencia = () => {

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
    gsap.from('.nav__item', {opacity: 0, duration: 3, delay: 2.5, ease:'expo.out', stagger: .2})

    // SOCIAL
    gsap.from('.home__social-icon', {opacity: 0, duration: 3, delay: 3, y: 25, ease:'expo.out', stagger: .2})
    });
    

    return (
        <div>
            <div class="overlay first"></div>
            <div class="overlay second"></div>
            <div class="overlay third"></div>
            <div class="overlay four"></div>

        <main className="l-main bd-grid">
            <div className="home">

                <div className="home__divGrande">
                    <div className="home__information">
                        
                        <span className="home__skill anime-text">Experiencia <br/> Laboral</span>
                        <p>
                            <span className="home__p anime-text">Ninguna :( <br/>     Pero hay ganas :D</span>
                        </p>
                    </div>
                    
                    <div className="home__information">
                        
                        <span className="home__skill anime-text">Experiencia <br/> Academica</span>
                        <p>
                            <span className="home__pressent anime-text">Everis SENA: <li>Blockchain</li><li>Arquitectura De datos</li><li>Ciber Seguridad</li><li>Front End En La nube</li></span>
                        </p>
                    </div>
                    <div className="home__information">
                        
                        <span className="home__skill anime-text">Experiencia <br/> Academica</span>
                        <p>
                            <span className="home__pressent anime-text">Mision TIC2022:</span> <br/>
                            <span className="home__p anime-text">Un proyecto liderado por el ministerio tic <br/> que buscaba formar a mas de 100.000 <br/> desarrolladores en Colombia</span> <br/>
                            
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
