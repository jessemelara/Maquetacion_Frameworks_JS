import React, { Component } from "react";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

class Pagina1 extends Component {
  render() {
    var nombre = this.props.match.params.nombre;
    var apellidos = this.props.match.params.apellidos;

    return (
      <React.Fragment>
        <Slider title="Párametros en la URL" size="slider-small" />
        <div className="center">
          <section id="content">
            <h2 className="subheader">Página 1: Párametros</h2>
            <h3>
              {nombre && !apellidos && (
                <span>
                  {"Su nombre es: "} {nombre}
                </span>
              )}
              {nombre && apellidos && (
                <span>
                  {"Su nombre es: "} {nombre} {apellidos}
                </span>
              )}
              {!nombre && !apellidos && (
                <span>{"No hay parámetros que mostrar"}</span>
              )}
            </h3>
          </section>

          <Sidebar />
        </div>
      </React.Fragment>
    );
  }
}

export default Pagina1;
