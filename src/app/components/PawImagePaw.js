import React, { Component } from 'react';
import Huella from '../assets/huella.svg';

class PawImagePaw extends Component{
    render(){
        return(
            <figure className="paw-image-four">
                <img alt="imgDog" src={Huella} />
            </figure>
        )
    }
}
export default PawImagePaw;