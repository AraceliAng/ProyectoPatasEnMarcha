import React, { Component } from 'react';
import ConstactElement from '../components/ContactElement';


class Contact extends Component{
    render(){
        return(
            
    <div>
        <section id="contact" className="contact">
            <div className="align-center">
                <h2 className="tittle-secction-black" >Contacto</h2>
            </div>
            <ConstactElement />
        </section>
    </div>
        )
    }
    
}

export default Contact;