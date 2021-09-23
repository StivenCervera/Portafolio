import React from 'react'

import '../css/styles.css'

import Routes from '../routes/Router'

import Header from "../components/Header"
import { BrowserRouter } from 'react-router-dom'

const portafolio = () => {
    return (
        <div>
            <BrowserRouter>
        
                <Header />

                <Routes />

            
            </BrowserRouter>
        </div>
    )
}

export default portafolio
