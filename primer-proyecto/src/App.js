import React from "react";
import MiLista from './MiLista';
import './App.css';

function App() {
  return (
    <div>
      <h1>Mi apliacion de contactos</h1>
      <div className="parrafo">
        <p>Esta aplicacion muestra los contactos almacenados: </p>
      </div>

      <br />
      <MiLista />
    </div>

  );
}

class MiComponente extends React.Component {
  state = {
    visible: true
  }
  render(){
    if(this.state.visible){
    return (
      <div>
        Hola, este es un componente se encuentra visible.
        <button onClick={() => this.setState({ visible: false
        })}> X </button>
      </div>
    );
    }
    else{
      return(
      <div>
      El contenido se encuentra oculto.
      <button onClick={() => this.setState({ visible: true
      })}> Mostrar </button>
      </div>
      );
    }
  }
}

export default App;
