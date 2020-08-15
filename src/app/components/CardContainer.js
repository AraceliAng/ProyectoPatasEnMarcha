import React from 'react';

const CardContainer=({names, gender, size, imag})=>(
 
    <div>
        <div className="uk-card uk-card-default">
            <div className="uk-card-header">
                <div className="uk-grid-small uk-flex-middle" uk-grid="true">
                    <div className="uk-width-expand">
                        <h3 className="uk-card-title uk-margin-remove-bottom">{names}</h3>
                        <div className="uk-child-width-1-2 header-card">
                            <p className="uk-text-meta uk-margin-remove-top">Género: {gender}</p>
                            <p className="uk-text-meta uk-margin-remove-top">Talla: {size}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="uk-card-body body-card-adoption">
                <img alt="imgAdoption" src={imag} className="img-adoption" />
            </div>
            <div className="uk-card-footer uk-child-width-1-2 footer-card">
                <a className="uk-button uk-button-text" href="#my_adoption" uk-toggle="true">Adopta</a>
                {/* <a href="vermas.html" class="uk-button uk-button-text">Ver más</a> */}
                <button  className="uk-button uk-button-text">Ver más</button>
            </div>
        </div>
       

    </div>


       
)

export default CardContainer;