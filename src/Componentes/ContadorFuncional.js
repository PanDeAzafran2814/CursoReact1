import React, {useState} from 'react';
import styles from './Contador.module.css';
import Boton from './Elementos/Boton';

const ContadorFuncional = (props) => {
    const [cuenta, CambiarCuenta] = useState(0);

    const incrementar =(cantidad) =>{
        CambiarCuenta(cuenta+cantidad)
    }

    const disminuir =(cantidad) =>{
        CambiarCuenta(cuenta-cantidad)
    }

    return ( 
        <>
        <div>
            <h1>Contador: {cuenta}</h1>
            <Boton negro onClick={() => incrementar(props.cantidadAIncrementar)}>Incrementar</Boton>
            <Boton negro onClick={() => disminuir(props.cantidadADisminuir)}>Disminuir</Boton>
        </div>
        </>
     );
}
 
export default ContadorFuncional;