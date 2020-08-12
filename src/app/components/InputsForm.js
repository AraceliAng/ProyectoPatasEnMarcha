import React  from 'react';


const InputsForm = ({ handleChange=()=>{} ,name='default',placeholder='placeholder', isEmail, isPhone}) => {
    return(
        <div className="uk-margin">
                <input 
                    className= "uk-input input-style" 
                    // type= {isEmail ? "email" : "text", isPhone ?  "tel" :"text" }
                    type= {isEmail ? "email" : "text"}
                    placeholder= {placeholder}
                    name= {name}
                    onChange= {handleChange}
                />
            </div>
    )
}



export default InputsForm;