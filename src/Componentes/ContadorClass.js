import React, { Component } from 'react';

class Contador extends  Component{
    constructor(props){
         super(props);
         this.state={contador:0}
    }

    incrementar(cantidad){
        this.setState((estadoAnterior) => {
            return{
                contador: estadoAnterior.contador+cantidad
            }
        });
    }

    componentDidMount(){
        console.log('El componente se cargo en el dom');
        ///..Llamamos a la API...
    }

    componentDidUpdate(propiedadesA, estadoA){
        console.log('El componete se actualizo');
        console.log('Propiedades anterios del componente', propiedadesA);
        console.log('Estado anterior del componente', estadoA)
    }

    componentWillUnmount(){
        console.log('close api');
    }

    disminuir(cantidad){
        this.setState((estadoAnterior) => {
            return{
                contador: estadoAnterior.contador-cantidad
            }
        });
    }

    render(){
        return(
            <div>
                <h1>Contador : {this.state.contador}</h1>
                <button onClick={() => this.incrementar(this.props.cantidadAIncrementar)}>Incrementar</button>
                <button onClick={() => this.disminuir(this.props.cantidadADisminuir)}>Dismunuir</button>
            </div>
        );
    }
}

export default Contador;
