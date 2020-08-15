import React, { Component } from 'react';
import NavBar from '../components/NavBar';


class Header extends Component{
    render(){
        return(
            <div>
                <nav className="uk-navbar-container navbar-container" uk-sticky="top:0" uk-navbar="true">
                    <NavBar />
                </nav>
            </div>
        )
    }
}

export default Header;