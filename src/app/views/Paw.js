import React, { Component } from 'react';
import Paw1 from '../assets/paw1.jpg';
import Paw2 from '../assets/paw2.jpg';
import Paw3 from '../assets/paw3.jpg';
import Paw4 from '../assets/paw4.jpg';
import Paw5 from '../assets/paw5.jpg';
import Paw6 from '../assets/paw6.jpg';
import Paw7 from '../assets/paw7.jpg';
import Li from '../assets/li.jpg';
import PawImagePaw from '../components/PawImagePaw';
import TextareaForm from '../components/TextareaForm';
import InputsForm from '../components/InputsForm';
import AccordionContainer from '../components/AccordionContainer';
import AccordionLi from '../components/AccordionLi';

class Paw extends Component{
    state = {
        rescue: {},
        tempHome: {}
    }
    handleChange=(event,nameForm)=>{
        const {rescue,tempHome} = this.state;
        const {name,value} = event.target;
       
        if(nameForm === "rescue"){
          rescue[name]= value
    
        }else{
          tempHome[name]= value
        }
        this.setState({rescue,tempHome})
      }
    sendData=(event)=>{
        event.preventDefault()
        const {name} = event.target
        if(name === "rescue"){
          console.log("Es el rescatista", this.state.rescue)
         
        }else{
          console.log("Es el hogar temporal", this.state.tempHome)
        }
        
      }


    render(){
        return(
            <section id="paw" className="paw">
                <div className="align-center">
                    <h3 className="paw-tittle">Danos una pata</h3>
                </div>
                <AccordionContainer>
                    <AccordionLi title="Proceso para ser un padrino">
                    <div uk-grid="true">
                            <div className="uk-width-1-5@m">
                                <div className="paw-post">
                                    <figure className="paw-image">
                                        <img alt="imgDog" src={Paw5} />
                                    </figure>
                                    <span className="paw-overlay">
                                        <p>
                                            <span className="paw-commentary">
                                                Llena el formulario que se encuentra en la información
                                                        del perrito que deseas apadrinar.
                                            </span>
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div className="uk-width-1-5@m">
                                <div className="uk-width-1-2@s">
                                    <PawImagePaw />
                                </div>
                                <div className="uk-width-2-2@s">
                                    <PawImagePaw />
                                </div>
                                <div className="uk-width-1-2@s">
                                    <PawImagePaw />
                                </div>
                                <div className="uk-width-2-2@s">
                                    <PawImagePaw />
                                </div>
                            </div>
                            <div className="uk-width-1-5@m">
                                <div className="paw-post">
                                    <figure className="paw-image">
                                    <img alt="imgDog" src={Paw6} />
                                    </figure>
                                    <span className="paw-overlay">
                                    <p>
                                        <span className="paw-commentary">
                                            Te enviamos un email con la información para hacer los donativos.
                                        </span>
                                    </p>
                                    </span>
                                </div>
                            </div>
                            <div className="uk-width-1-5@m">
                                <div className="uk-width-1-2@s">
                                    <PawImagePaw />
                                </div>
                                <div className="uk-width-2-2@s">
                                    <PawImagePaw />
                                </div>
                                <div className="uk-width-1-2@s">
                                    <PawImagePaw />
                                </div>
                                <div className="uk-width-2-2@s">
                                    <PawImagePaw />
                                </div>
                            </div>
                            <div className="uk-width-1-5@m">
                                <div className="paw-post">
                                    <figure className="paw-image">
                                        <img alt="imgDog" src={Paw7} />
                                    </figure>
                                    <span className="paw-overlay">
                                    <p>
                                        <span className="paw-commentary">Te enviamos evidencias.</span>
                                    </p>
                                    </span>
                                </div>
                            </div>
                        </div> 
                    </AccordionLi>

                    <AccordionLi title="Proceso de adopción">
                    <div uk-grid="true">
                            <div className="uk-width-1-5@m">
                                <div className="paw-post">
                                    <figure className="paw-image">
                                        <img alt="imgDog" src={Paw1} />
                                    </figure>
                                    <span className="paw-overlay">
                                        <p>
                                            <span className="paw-commentary">
                                            Llena el formulario que se encuentra en la foto
                                                del perrito que deseas adoptar y poder programar una visita.
                                            </span>
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div className="uk-width-1-5@m">
                                <div className="uk-width-1-2@s">
                                    <PawImagePaw />
                                </div>
                                <div className="uk-width-2-2@s">
                                    <PawImagePaw />
                                </div>
                                <div className="uk-width-1-2@s">
                                    <PawImagePaw />
                                </div>
                                <div className="uk-width-2-2@s">
                                    <PawImagePaw />
                                </div>
                            </div>
                            <div className="uk-width-1-5@m">
                                <div className="paw-post">
                                    <figure className="paw-image">
                                        <img alt="imgDog" src={Paw2} />
                                    </figure>
                                    <span className="paw-overlay">
                                        <p>
                                        <span className="paw-commentary">
                                            Te visitamos para que lo conozcas y ver la
                                                        conexión al conocerce.
                                        </span>
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div className="uk-width-1-5@m">
                                <div className="uk-width-1-2@s">
                                    <PawImagePaw />
                                </div>
                                <div className="uk-width-2-2@s">
                                    <PawImagePaw />
                                </div>
                                <div className="uk-width-1-2@s">
                                    <PawImagePaw />
                                </div>
                                <div className="uk-width-2-2@s">
                                    <PawImagePaw />
                                </div>
                            </div>
                            <div className="uk-width-1-5@m">
                                <div className="paw-post">
                                    <figure className="paw-image">
                                        <img alt="imgDog" src={Paw3} />
                                    </figure>
                                    <span className="paw-overlay">
                                        <p>
                                            <span className="paw-commentary">
                                            Documentamos la adopción y comenzan una vida juntos.
                                            </span>
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div className="uk-width-1-5@m">
                                <div className="uk-width-1-2@s">
                                    <PawImagePaw />
                                </div>
                                <div className="uk-width-2-2@s">
                                    <PawImagePaw />
                                </div>
                                <div className="uk-width-1-2@s">
                                    <PawImagePaw />
                                </div>
                                <div className="uk-width-2-2@s">
                                    <PawImagePaw />
                                </div>
                            </div>
                            <div className="uk-width-1-5@m">
                                <div className="paw-post">
                                    <figure className="paw-image">
                                        <img alt="imgDog" src={Paw4} />
                                    </figure>
                                    <span className="paw-overlay">
                                        <p>
                                        <span className="paw-commentary">
                                            Después de la adopción se hará un seguimiento.
                                            </span>
                                        </p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </AccordionLi>
                    
                    <AccordionLi title="Proceso para ser rescatista">
                    <span className="text-paw">
                        <p>Un rescatista es aquella persona que ayuda a los perros en situación de calle 
                                    poniendolos a salvo, para que posteriormente encuentren un hogar.</p>
                        <p>Debes llenar el formulario para que nosotros nos pongamos en contacto contigo.</p>
                        </span>

                        <form  className="form-container" name="rescue" onSubmit={this.sendData}>
                            <fieldset className="uk-fieldset font-paw  form-subcontainer">
                                <InputsForm
                                    name="nombre"
                                    placeholder="Nombre"
                                    handleChange={(e)=>this.handleChange(e,"rescue")}
                                />
                                {/* <div className="uk-margin">
                                    <input className="uk-input input-style" type="text" placeholder="Nombre" />
                                </div> */}
                                <InputsForm
                                    name="apellido"
                                    placeholder="Apellido"
                                    handleChange={(e)=>this.handleChange(e,"rescue")}
                                />
                                {/* <div className="uk-margin">
                                    <input className="uk-input input-style" type="text" placeholder="Apellido" />
                                </div> */}
                                <InputsForm
                                    name="direccion"
                                    placeholder="Dirección"
                                    handleChange={(e)=>this.handleChange(e,"rescue")}
                                />
                                {/* <div className="uk-margin">
                                    <input className="uk-input input-style" type="text" placeholder="Dirección" />
                                </div> */}
                                <InputsForm
                                    name="correo"
                                    placeholder="Correo Electrónico"
                                    handleChange={(e)=>this.handleChange(e,"rescue")}
                                    isEmail
                                />
                                {/* <div className="uk-margin">
                                    <input className="uk-input input-style" type="email" placeholder="Correo Electrónico" />
                                </div> */}
                                
                                <InputsForm
                                    name="telefono"
                                    placeholder="Número de teléfono"
                                    handleChange={(e)=>this.handleChange(e,"rescue")}
                                    // type="tel"
                                />
                                {/* <div className="uk-margin">
                                    <input className="uk-input input-style" type="tel" placeholder="Teléfono Móvil" />
                                </div> */}
                                <InputsForm
                                    name="ocupacion"
                                    placeholder="Ocupación"
                                    handleChange={(e)=>this.handleChange(e,"rescue")}
                                />
                                {/* <div className="uk-margin">
                                    <input className="uk-input input-style" type="text" placeholder="Ocupación" />
                                </div> */}
                                <TextareaForm
                                    name="razones"
                                    placeholder="Escribe las razones por las cuales quieres ser rescatista"
                                    handleChange={(e)=>this.handleChange(e,"rescue")}
                                />
                                {/* <div className="uk-margin">
                                    <textarea className="uk-textarea input-style" rows="5" placeholder="Escribe las razones por las cuales quieres ser rescatista" />
                                </div>
                                    */}
                                <div className="form-button">
                                    <button className="uk-button uk-button-default  paw-button"> Enviar </button>
                                </div>
                            </fieldset>
                        </form>
                    </AccordionLi>
                         
                    <AccordionLi title="Proceso para brindar hogar temporal">
                        <span className="text-paw">
                            <p>Hogar temporal es cuando le das estancia a los perritos rescatados en tu casa, se le brinda alimento, y cuidados que
                                    requiera durante unos días hasta que se encuentre una familia que lo desea adoptar.</p>
                            <p>Debes llenar el formulario para que nosotros nos pongamos en contacto contigo y realizar una visita.</p>
                        </span>
                        <form className="form-container" name="tempHome" onSubmit={this.sendData}>
                            <fieldset className="uk-fieldset font-paw form-subcontainer">
                                <InputsForm
                                    name="nombre"
                                    placeholder="Nombre"
                                    handleChange={(e)=>this.handleChange(e,"tempHome")}
                                />
                                {/* <div className="uk-margin">
                                    <input className="uk-input input-style" type="text" placeholder="Nombre" />
                                </div> */}
                                <InputsForm
                                    name="apellido"
                                    placeholder="Apellido"
                                    handleChange={(e)=>this.handleChange(e,"tempHome")}
                                />
                                {/* <div className="uk-margin">
                                    <input className="uk-input input-style" type="text" placeholder="Apellido" />
                                </div> */}
                                <InputsForm
                                    name="direccion"
                                    placeholder="Dirección"
                                    handleChange={(e)=>this.handleChange(e,"tempHome")}
                                />
                                {/* <div className="uk-margin">
                                    <input className="uk-input input-style" type="text" placeholder="Dirección" />
                                </div> */}
                                <InputsForm
                                    name="correo"
                                    placeholder="Correo Electrónico"
                                    handleChange={(e)=>this.handleChange(e,"tempHome")}
                                    isEmail
                                />
                                {/* <div className="uk-margin">
                                    <input className="uk-input input-style" type="email" placeholder="Correo Electrónico" />
                                </div> */}
                                <InputsForm
                                    name="telefono"
                                    placeholder="Número de teléfono"
                                    handleChange={(e)=>this.handleChange(e,"tempHome")}
                                />
                                {/* <div className="uk-margin">
                                    <input className="uk-input input-style" type="tel" placeholder="Teléfono Móvil" />
                                </div> */}
                                <InputsForm
                                    name="ocupacion"
                                    placeholder="Ocupación"
                                    handleChange={(e)=>this.handleChange(e,"tempHome")}
                                />
                                {/* <div className="uk-margin">
                                    <input className="uk-input input-style" type="text" placeholder="Ocupación" />
                                </div> */}
                                <InputsForm
                                    name="numeroDias"
                                    placeholder="Número de días que brindarás hogar temporal"
                                    handleChange={(e)=>this.handleChange(e,"tempHome")}
                                />
                                {/* <div className="uk-margin">
                                    <input className="uk-input input-style" type="number" placeholder="Número de días que brindarás hogar temporal" />
                                </div> */}
                                <InputsForm
                                    name="numeroAnimales"
                                    placeholder="¿Cúantos animales tienes en casa?"
                                    handleChange={(e)=>this.handleChange(e,"tempHome")}
                                />
                                {/* <div className="uk-margin">
                                    <input className="uk-input input-style" type="number" placeholder="¿Cúantos animales tienes en casa?" />
                                </div> */}
                                <TextareaForm
                                    name="razonesHome"
                                    placeholder="Escribe las razones por las cuales quieres ayudar dando hogar temporal a los perritos"
                                    handleChange={(e)=>this.handleChange(e,"tempHome")}
                                />
                                {/* <div className="uk-margin">
                                    <textarea className="uk-textarea input-style" rows="5" placeholder="Escribe las razones por las cuales quieres ayudar dando hogar temporal a los perritos" />
                                </div> */}
                                <div className="form-button">
                                    <button className="uk-button uk-button-default paw-button">Enviar</button>
                                </div>
                            </fieldset>
                        </form>
                    </AccordionLi>
                                        
                    <AccordionLi title="Donativos">
                    <span className="text-paw">
                        <p> Ayúdanos a seguir ayudando y defendiendo a los animales de nuestro entorno. Su colaboración 
                            a Patas En Marcha ayuda a perritos que estan en situación de calle ya 
                            que con ello podemos alimentarlos, pagar sus citas medicas, entre otas cosas.</p>
                    </span>
                    <div className="list-donation">
                        <figure className="donation-image">
                            <img alt="imageDonativos" src={Li} />
                        </figure>
                        <ul className="font-paw">
                            <p>Lista de donativos</p>
                            <li className="li-list">Alimento</li>
                            <li className="li-list">Cuotas mensuales desde $100 </li>
                            <li className="li-list">Articulos de limpieza para perros</li>
                            <li className="li-list">Jueguetes para perros</li>
                        </ul>
                    </div>
                    </AccordionLi>
                </AccordionContainer>
            </section>
        )
    }
}

export default Paw;