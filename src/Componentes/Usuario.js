import React from 'react';
import {Titulo} from './Titulo';
import styled from 'styled-components';

const Usuario = () => {
    const pais = "Mexico";
    const amigos = ["Victor", "Alex", "Juan"]
    return (
      <div>
          <Titulo/>
          <Titulo user="Manuel" color="purple"/>
          { pais&& <p>Tu eres de: {pais}</p>}
          <Parrafo>Tu lista de amigos es:</Parrafo>
          <ul>
            {amigos.map((amigo, index) => {
              return <li key={index}> {amigo} </li>
            })}
          </ul>
          <Parrafo>Que tengas un buen dia...</Parrafo>
        </div>
    );
  };

  const Parrafo = styled.p`
    margin:10px 0; 
  `;

  export default Usuario;