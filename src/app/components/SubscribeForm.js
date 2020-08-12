import React from 'react';


const SubscribeForm =({handleChange=()=>{}, name="default", placeholder="placeholder", isEmail})=>{
   return(
        <input 
            className="uk-input input-style" 
            type={isEmail ? "email" : "text"}
            placeholder={placeholder}
            onChange={handleChange}
            name={name}
        />
   )
}
     
export default SubscribeForm;