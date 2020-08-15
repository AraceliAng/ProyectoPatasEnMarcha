import React, { Component } from 'react';
import information from '../json/information.json';
import MoreSlider from '../components/MoreSlider';
import MoreInformation from '../components/MoreInformation';
import MoreContainerName from '../components/MoreContainerName';



class More extends Component{
    render(){
        return(
            <section className="vermas">
                <div>
                    {information.adopcion.map((index, item)=> <MoreContainerName key={index} {...item}/>)}
                </div>
                <div className="vermas-container">
                    <div className="uk-column-1-2@s uk-column-divider div-vermas-details">
                        <div className="uk-position-relative uk-visible-toggle uk-light"  uk-slider="center: true">
                            {/* {information.adopcion.image.map((item, index)=> <MoreSlider key={index} {...item} />)} */}
                        </div>
                        <div>
                            {/* {information.adoption.map((index, item)=> <MoreInformation key={index} {...item}/>)} */}
                        </div>
                        <div className="uk-column-1-2 uk-column-divider">
                            <p><a className="uk-button uk-button-text" href="#my_adoption" uk-toggle="true">Adopta</a></p>
                            <p><a className="uk-button uk-button-text" href="#apadrina_dog" uk-toggle="true">Apadrina</a></p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default More;