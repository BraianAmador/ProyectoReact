import React from "react";

class MiLista extends React.Component {
    contactos = [
        { id: 1, nombre: "Santi" },
        { id: 2, nombre: "Carlos" },
        { id: 3, nombre: "Mica" },
        { id: 4, nombre: "Marta" }
    ];
    render(){
        return (
            <div>
                { this.contactos.map
                (i => <li> ID: { i.id }, Nombre : { i.nombre } </li>)
                }
            </div>
        )
    }
}

export default MiLista;