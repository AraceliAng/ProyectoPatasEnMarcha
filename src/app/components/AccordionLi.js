import React from 'react';

const AccordionLi=({children,title})=>(
    <li>
        <a className="uk-accordion-title paw-accordion-tittle" href="#"> {title} </a>
        <div className="uk-accordion-content paw-accordion">
            {children}
        </div>
    </li>
)

export default AccordionLi;