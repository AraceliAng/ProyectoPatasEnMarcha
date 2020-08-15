import React from 'react';

const MoreSlider =({image})=>(

    <div >
        <ul className="uk-slider-items uk-grid uk-grid-match">
            <li className="uk-width-1-1">
                <div className="uk-cover-container">
                    <img alt="imagen de perro" src={image}/> 
                </div>
            </li>
        </ul>
        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
    </div>


)

export default MoreSlider;