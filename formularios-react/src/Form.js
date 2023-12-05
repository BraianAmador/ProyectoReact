import React from 'react';
import './styles/index.css';
import './styles/App.css';
import './styles/Form.css';

class Form extends React.Component {
    envioFormulario = event => {
        event.preventDefault();
        this.props.agregarPersona(
            document.getElementById("nombre").value,
            document.getElementById("telefono").value);
        
        document.getElementById("nombre").value = "";
        document.getElementById("telefono").value = "";
    }
    render(){
        return (
            <div>
                <form className="formularios" onSubmit={this.envioFormulario}>
                    <label className="etiquetas">Nombre: </label><br />
                    <input className="ingreso"
                        type="text"
                        placeholder="Ingrese el nombre"
                        id="nombre" name="nombre" required />
                    <br />
                    <label className="etiquetas">Teléfono: </label><br />
                    <input className="ingreso"
                        type="number"
                        placeholder="Ingrese el teléfono"
                        id="telefono" name="telefono" required />

                    <br />
                    <br />
                    <button className="botones" type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}

export default Form;