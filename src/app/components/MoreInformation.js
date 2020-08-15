import React from 'react';


const MoreInformation =({gender, size, weight, age, fnac, sterilized, info})=>(
    <div>
        <div className="uk-column-1-2 uk-column-divider">
            <p className="uk-text-meta uk-margin-remove-top align-left">Género: {gender}</p>
            <p className="uk-text-meta uk-margin-remove-top align-left">Peso: {weight} kg</p>
            <p className="uk-text-meta uk-margin-remove-top align-left">Edad: {age}</p>
            <p className="uk-text-meta uk-margin-remove-top align-left">F. Nac: {fnac} </p>
            <p className="uk-text-meta uk-margin-remove-top align-left">Esterilizado: {sterilized}</p>
            <p className="uk-text-meta uk-margin-remove-top align-left">Talla: {size}</p>
        </div>
        <div>
            <p>{info} </p>
        </div>
    </div>

)
export default MoreInformation;