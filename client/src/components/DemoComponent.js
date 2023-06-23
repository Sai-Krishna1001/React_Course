import React from 'react';

export default function DemoComponent({name, country , children}){
    // console.log(props);
    // props.name = 'sai';
    return(
        <div>
           <h1>I am {name} from {country}</h1>
           <h2>{children}</h2>
        </div>
    )
}