import './App.css';

function App() {
  return (
    <div>
      <h1>Mi apliacion</h1>
      <h2>Este es mi primer componente React</h2>
      <div className="parrafo">
        <p>Bienvenido a mi aplicacion, esto fue creado con JavaScript en React</p>
      </div>
    
      <br />
      <MiLista />

      <br />
      <MiLista />

      <br />
      <MiLista />
    </div>

  );
}

function MiLista(){
  return(
    <div className="lista">
      <h4>Mi lista de clientes:</h4>
      <ul>
        <li>Santiago</li>
        <li>Micaela</li>
        <li>Pedro</li>
        <li>Marta</li>
      </ul>
    </div>
  );
}

export default App;
