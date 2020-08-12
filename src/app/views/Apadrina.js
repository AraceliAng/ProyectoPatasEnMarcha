import React, { Component } from 'react';
import InputsForm from '../components/InputsForm';


class Apadrina extends Component{
    state={
        apadrinar:{}
    }
    handleChange = (event, nameForm) => {
        const {apadrinar} = this.state;
        const {name, value} = event.target;

        if(nameForm === "apadrinar"){
            apadrinar[name]=value
        }else{
            console.log("Error en el formulario....")
        }
        this.setState({apadrinar})
    }

    sendData=(event)=>{
        event.preventDefault()
        const {name} = event.target
        if(name === "apadrinar"){
            console.log("Es el apadrinamiento", this.state.apadrinar)
        }else{
            console.log("Error al aenviar data....")
        }
    }
    

    render(){
        return(
            <section id="apadrina" className="apadrina">
                <div className="align-center">
                    <h3 className="paw-tittle">Apadrina</h3>
                </div>
                <span>
                    <p className="text-paw">
                        Llena el formulario y nos pondremos en contacto contigo, mandando un email con la
                        información del perro al que vas a apadrinar.
                    </p>
                </span>
                <div className="apadrina-container">
                    <form  className="form-container" name="apadrinar" onSubmit={this.sendData}>
                        <fieldset className="uk-fieldset font-paw form-subcontainer">
                            <InputsForm
                                name="nombre"
                                placeholder="Nombre"
                                handleChange={(e)=>this.handleChange(e,"apadrinar")}
                            />
                            {/* <div className="uk-margin">
                                <input className="uk-input input-style" type="text" placeholder="Nombre" />
                            </div> */}
                            <InputsForm
                                name="apellido"
                                placeholder="Apellido"
                                handleChange={(e)=>this.handleChange(e,"apadrinar")}
                            />
                            {/* <div className="uk-margin">
                                <input className="uk-input input-style" type="text" placeholder="Apellido" />
                            </div> */}
                            <InputsForm
                                name="correo"
                                placeholder="Correo Electrónico"
                                handleChange={(e)=>this.handleChange(e,"apadrinar")}
                                isEmail
                            />
                            {/* <div className="uk-margin">
                                <input className="uk-input input-style" type="email" placeholder="Correo Electrónico" />
                            </div> */}
                            <InputsForm
                                name="telefono"
                                placeholder="Número de teléfono"
                                handleChange={(e)=>this.handleChange(e,"apadrinar")}
                            />
                            {/* <div className="uk-margin">
                                <input className="uk-input input-style" type="tel" placeholder="Teléfono Móvil"/>
                            </div> */}
                            <InputsForm
                                name="direccion"
                                placeholder="Dirección"
                                handleChange={(e)=>this.handleChange(e,"apadrinar")}
                            />
                            {/* <div className="uk-margin">
                                <input className="uk-input input-style" type="text" placeholder="Dirección"/>
                            </div> */}
                            <InputsForm
                                name="edad"
                                placeholder="Edad"
                                handleChange={(e)=>this.handleChange(e,"apadrinar")}
                            />
                            {/* <div className="uk-margin">
                                <input className="uk-input input-style" type="number" placeholder="Edad"/>
                            </div> */}
                            <div className="form-button">
                                <button className="uk-button uk-button-default paw-button">Enviar</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                </section>
        )
    }
}

export default Apadrina;