import React, {useState} from 'react';

const FormularioLogin = (props) => {
    console.log(props);
    const [User, CambiarUser] = useState('');
    const [Pass, CambiarPass] = useState('');

  /*  const onChangeUser = (evento) =>{
        CambiarUser(evento.target.value)
    }

    const onChangePass = (evento) =>{
        CambiarPass(evento.target.value)
    }*/

    const Onchange = (evento) =>{
        if(evento.target.name==="User"){
            CambiarUser(evento.target.value)
        }else if(evento.target.name ==="Pass"){
            CambiarPass(evento.target.value)
        }
    }

    const OnSubmit = (e) => {
        e.preventDefault();
        if(User === "pancho" && Pass === "123"){
            props.cambiarEstadoSesion(true);
        }else{
            alert("Error al validar sus credenciales");
            CambiarUser('');
            CambiarPass('');
        }
    }

    return (  
        <form onSubmit={OnSubmit}>
            <div>
                <label htmlFor="User">Usuario</label>
                <input
                 type="text" 
                 name="User" 
                 id="User"
                 value={User}
                 onChange={Onchange}
                 />
            </div>
            <div>
                <label htmlFor="Pass">password</label>
                <input 
                type="password" 
                name="Pass" 
                id="Pass"
                value={Pass}
                onChange={Onchange}
                />
            </div>
            <button type="submit">Iniciar sesion</button>
        </form>
    );
}
 
export default FormularioLogin
