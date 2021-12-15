import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import FormularioLogin from './Componentes/FormularioLogin';

const App = () => {
  const [sesion, cambiarEstadoSesion]=useState(false);

  return (
    <> 
      {sesion === true ? 
        <>

        <button onClick={() => cambiarEstadoSesion(false)}>Cerrar sesion</button>
        </>
      : 
        <>
        <h1>No has iniciado sesion</h1>
        <FormularioLogin/>
        {/*<button onClick={() => cambiarEstadoSesion(true)}>Iniciar sesion</button>*/}
        </>
        } 
    </>
    
  );
};
ReactDOM.render(<App/>,document.getElementById('root'));

