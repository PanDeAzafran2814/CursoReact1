import React from 'react';
import {Titulo} from './Titulo';

const Usuario = () => {
    const pais = "Mexico";
    const amigos = ["Victor", "Alex", "Juan"]
    return (
      <div>
          <Titulo/>
          <Titulo user="Manuel" color="purple"/>
          { pais&& <p>Tu eres de: {pais}</p>}
          <p>Tu lista de amigos es:</p>
          <ul>
            {amigos.map((amigo, index) => {
              return <li key={index}> {amigo} </li>
            })}
          </ul>
          <p>Que tengas un buen dia...</p>
        </div>
        
    );
  };

  export default Usuario;