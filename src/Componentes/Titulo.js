import React from 'react';

const Titulo = ({user = "Usuario", color = "gray"}) => {
    return ( 
        <h1 className="titulo" style={{color:color}}>Hola {user}</h1> 
     );
}
 
export {Titulo};