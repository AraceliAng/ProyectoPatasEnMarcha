import React, { Component } from 'react';

import SubscribeForm from '../components/SubscribeForm';


class Subscribe extends Component{

    state={
        subscribe: {}
    }

    handleChange=(event, nameForm)=>{
        const {subscribe}=this.state;
        const {name, value}= event.target;
        if( nameForm === "subscribe"){
            subscribe[name]=value
        }else{
            console.log("error en el handleChange")
        }
        this.setState({subscribe})
    }
    sendData=(event)=>{
        event.preventDefault()
        const {name}= event.target
        if(name === "subscribe"){
            console.log("Es la suscripcion...", this.state.subscribe)
        }else{
            console.log("ERROR en la la suscripcion...")
        }
    }

    render(){
        return(
            <section id="subscribe" className="subscribe">
                <div className="align-center">
                    <h3 className="tittle-secction-black" >Suscribete</h3>
                </div>
                <span>
                    <p className="text-subscribe">
                        Suscribete para que tengas información acerca de cada perro que este en adopción.
                    </p>
                </span>
                    <div className="subscribe-container">
                        <div className="subscribe-align">
                            <form  className="form-container div-inputs" name="subscribe" onSubmit={this.sendData}>
                                <SubscribeForm 
                                    name="correo"
                                    placeholder="Correo Electrónico"
                                    handleChange={(e)=>this.handleChange(e, "subscribe")}
                                    isEmail
                                />
                                <button className="uk-button uk-button-default  subscribe-button">Enviar</button>
                            </form>
                        </div>
                    </div>
            </section>
        )
    }
}

export default Subscribe;