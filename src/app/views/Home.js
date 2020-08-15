import React, { Component } from 'react';
import '../styles/Main.css';
import Header from './Header';
import ParallaxUno from './ParallaxUno';
import Paw from './Paw'
import ParallaxDos from './ParallaxDos';
import Apadrina from './Apadrina';
import ParallaxTres from './ParallaxTres';
import Adoption from './Adoption';
import ParallaxCuatro from './ParallaxCuatro'
import Subscribe from './Subscribe';
import ParallaxCinco from './ParallaxCinco';
import Contact from './Contact';

class Home extends Component{
    render(){
        return(
            <div className="total">
                <Header />
                <ParallaxUno />
                <Paw />
                <ParallaxDos />
                <Apadrina />
                <ParallaxTres/>
                <Adoption/>
                <ParallaxCuatro/>
                <Subscribe/>
                <ParallaxCinco/>
                <Contact/>
            </div>
        )
    }
}

export default Home;