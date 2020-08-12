import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../assets/logo.png';


class NavBar extends Component{
    render(){
        return(
            <div>
                
                <ul className="uk-navbar-nav uk-visible@m">
                    <li>
                        <Link to="/home"><img src={Logo} width="60px" alt="Home"/> </Link>
                    </li>
                    <li>
                        <Link to="/paw">Danos una pata</Link>
                    </li>
                    <li>
                        <Link to="/apadrina">Apadrinar</Link>
                    </li>
                    <li>
                        <Link to="/adoption">Adopción</Link>
                    </li>
                    <li>
                        <Link to="/subscribe">Suscribirse</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacto</Link>
                    </li>
                </ul>
                <a href="#offcanvas-usage" className="uk-icon burger-menu uk-hidden@m align-center" uk-icon="icon: menu; ratio: 2" uk-toggle="true"> </a>


                <div id="offcanvas-usage" uk-offcanvas="true">
                    <div className="uk-offcanvas-bar menuResponsive">
                        <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                        <ul className="uk-nav">
                            <li>
                                <Link to="/home"> <img src={Logo} width="60px" alt="Home"/> </Link>
                            </li>
                            <li>
                                <Link to="/paw"> Danos una pata </Link>
                            </li>
                            <li>
                                <Link to="/apadrina"> Apadrinar </Link>
                            </li>
                            <li>
                                <Link to="/adoption"> Adopción </Link>
                            </li>
                            <li>
                                <Link to="/subscribe"> Suscribirse </Link>
                            </li>
                            <li>
                                <Link to="/contact"> Contacto </Link>
                            </li>
                        </ul>
                    </div>
                </div>





            </div>
        )
    }
}

export default NavBar;