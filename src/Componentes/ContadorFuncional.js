import React, {useState} from 'react';

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
            <button onClick={() => incrementar(props.cantidadAIncrementar)}>Incrementar</button>
            <button onClick={() => disminuir(props.cantidadADisminuir)}>Disminuir</button>
        </div>
        </>
     );
}
 
export default ContadorFuncional;