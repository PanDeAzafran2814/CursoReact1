import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import FormularioLogin from './Componentes/FormularioLogin';
import Usuario from './Componentes/Usuario';
import ContadorClass from './Componentes/ContadorClass';
import ContadorFuncional from './Componentes/ContadorFuncional';

const App = () => {
  const [sesion, cambiarEstadoSesion]=useState(true);
  return (
    <> 
      {sesion === true ? 
        <>
        <Usuario/>
        {/*<ContadorFuncional cantidadAIncrementar={100} cantidadADisminuir={20}/>*/}
        {<ContadorClass cantidadAIncrementar={10} cantidadADisminuir={2}/>}
        <button onClick={() => cambiarEstadoSesion(false)}>Cerrar sesion</button>
        </>
      : 
        <>
        <h1>No has iniciado sesion</h1>
        <FormularioLogin cambiarEstadoSesion={cambiarEstadoSesion}/>
        {/*<button onClick={() => cambiarEstadoSesion(true)}>Iniciar sesion</button>*/}
        </>
        } 
    </>
    
  );
};
ReactDOM.render(<App/>,document.getElementById('root'));

