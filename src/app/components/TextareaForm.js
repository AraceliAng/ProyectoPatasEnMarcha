import React from 'react';

const TextareaForm = ({handleChange=()=>{} ,name='default',placeholder='placeholder'}) => {
    return(
        <div className="uk-margin">
            <textarea 
                className="uk-textarea input-style" 
                rows="5"
                placeholder = {placeholder}
                name= {name}
                onChange= {handleChange}
            />

        </div>
    )
}
export default TextareaForm;