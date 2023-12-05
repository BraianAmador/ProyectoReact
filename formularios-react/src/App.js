import Form from './Form';
import React from "react";
import './styles/index.css';
import './styles/App.css';
import './styles/Form.css';

class App extends React.Component {
  state = {
    personas: [
      { id: 1, nombre: "Santiago" },
      { id: 2, nombre: "Micaela" },
      { id: 3, nombre: "Joaquin" },
      { id: 4, nombre: "Miguel" },
      { id: 5, nombre: "Pablo" }
      ]
  }

  agregarPersona = (nuevoNombre, telefono) => {
    const persona = {
      id: this.state.personas.length + 1,
      nombre: nuevoNombre,
      telefono: telefono
    }
    console.log("Datos recibidos: ", persona);
    //Agrega al final de la lista de contactos el numero y nombre ingresado
    this.setState({
      personas: [...this.state.personas, persona]
  });
  }

  eliminarPersona = (id) => {
    const nuevoArreglo = this.state.personas.filter(personas =>
          personas.id !== id
    );
    this.setState({personas: nuevoArreglo});
    console.log("Eliminando elementos...");
  }

  actualizarPersona = (id) => {
    const nuevoArreglo = this.state.personas.map(persona => {
      if(persona.id === id){
        persona.deuda = !persona.deuda;
      }
      return persona;
    });
    this.setState({personas: nuevoArreglo});
  }

  render() {
    return (
      <div>
          <h1>Bienvenido a la aplicacion</h1>
          <div>
            <h2>Datos del visitante: </h2>
            <Form agregarPersona={this.agregarPersona} />
          </div>
          <br />
          <br />
          <div>
            <h2>Contactos</h2>
              <dl className="lista">
                { this.state.personas.map(i =>
                <div className="elemento" key={i.id}>
                  <dt>Nombre: { i.nombre } </dt>
                  <dd>ID: { i.id } </dd>
                  <dd>Telefono: { i.telefono } </dd>
                  <dd>Deuda: { i.deuda ? 'Si' : 'No' }</dd>
                  <button
                      onClick={this.eliminarPersona.bind(this, i.id)}
                  className="boton">Eliminar</button>
                  <button
                      onClick={this.actualizarPersona.bind(this, i.id)}
                  className="boton">Modificar</button>
                </div>)}
              </dl>
          </div>
      </div>
    );
  }
}



export default App;
