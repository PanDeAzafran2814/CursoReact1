import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import FormularioLogin from './Componentes/FormularioLogin';
import Usuario from './Componentes/Usuario';
import ContadorClass from './Componentes/ContadorClass';
import ContadorFuncional from './Componentes/ContadorFuncional';
import './index.css';
import Boton from './Componentes/Elementos/Boton';

const App = () => {
  const [sesion, cambiarEstadoSesion]=useState(true);
  return (
    <div className='contenedor'> 
      {sesion === true ? 
        <>
        <Usuario/>
        <ContadorFuncional cantidadAIncrementar={100} cantidadADisminuir={20}/>
        <Boton onClick={() => cambiarEstadoSesion(false)}>Cerrar sesion</Boton>
        </>
      : 
        <>
        <FormularioLogin cambiarEstadoSesion={cambiarEstadoSesion}/>
        </>
        } 
    </div>
    
  );
};
ReactDOM.render(<App/>,document.getElementById('root'));

