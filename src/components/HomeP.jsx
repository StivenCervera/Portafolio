import {Expo, gsap} from 'gsap';
import React, { useEffect } from 'react'

import img from '../img/img.jpeg' 

const HomeP = () => {

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
                    <div className="home__img" >
                        <img src={img} alt="" className="imgH" />
                    </div>
                    <div className="home__information">
                        <span className="home__pressent anime-text">Me presento, soy</span>
                        <h1 className="home__title anime-text">Stiven</h1>
                        <span className="home__skill anime-text">Y soy programador full-stack</span>
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

export default HomeP
