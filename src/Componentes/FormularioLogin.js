import React, {useState} from 'react';

const FormularioLogin = () => {
    const [User, CambiarUser] = useState('');
    const [Pass, CambiarPass] = useState('');

    const onChangeUser = (evento) =>{
        CambiarUser(evento.target.value)
    }

    const onChangePass = (evento) =>{
        CambiarPass(evento.target.value)
    }

    return (  
        <form >
            <p>Usuario: {User}</p>
            <p>Contrasena: {Pass}</p>
            <div>
                <label htmlFor="User">Usuario</label>
                <input
                 type="text" 
                 name="User" 
                 id="User"
                 value={User}
                 onChange={onChangeUser}
                 />
            </div>
            <div>
                <label htmlFor="Pass">password</label>
                <input 
                type="password" 
                name="Pass" 
                id="Pass"
                value={Pass}
                onChange={onChangePass}
                />
            </div>
            <button type="submit">Iniciar sesion</button>
        </form>
    );
}
 
export default FormularioLogin
