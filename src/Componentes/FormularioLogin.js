import React, {useState} from 'react';
import styles from './FormUserCss.module.css';
import Boton from './Elementos/Boton';

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
        <form className={styles.formulario} onSubmit={OnSubmit}>
                <h1>No has iniciado sesion</h1>
            <div>
                <label htmlFor="User" className={styles.label}>Usuario</label>
                <input
                 type="text" 
                 name="User" 
                 id="User"
                 value={User}
                 onChange={Onchange}
                 className={styles.input}
                 />
            </div>
            <div>
                <label htmlFor="Pass" className={styles.label}>password</label>
                <input 
                type="password" 
                name="Pass" 
                id="Pass"
                value={Pass}
                onChange={Onchange}
                className={styles.input}
                />
            </div>
            <Boton type="submit">Iniciar sesion</Boton>
        </form>
    );
}
 
export default FormularioLogin
