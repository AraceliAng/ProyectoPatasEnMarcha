import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CardContainer from '../components/CardContainer';
import images from '../json/images.json';
// import More from './More';


class Adoption extends Component{
    render(){
        return(
          <section id="adoption" className="adoption">
            <div className="align-center">
              <h3 className="paw-tittle">Adopta</h3>
            </div>
            <span>
              <p className="text-paw">
                  Da una pata adoptando a un perrito de los que se muestran o apadrinalos para que se 
                pueda cubrir en la totalidad sus necesidades.
              </p>
            </span>
            <div className="uk-child-width-1-3@s uk-text-center adoption-container" uk-grid="true">
              {images.adopcion.map((item, index)=> <CardContainer key={index} {...item} /> )}
            </div>
            
          </section>
      
        )
    }
}

export default Adoption;