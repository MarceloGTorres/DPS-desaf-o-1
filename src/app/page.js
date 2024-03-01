"use client"
import React, { useState } from 'react';
import RegistroMovimientos from './RegistroMovimientos';
import ResumenMensual from './ResumenMensual';
import "../styles/ResumenMensual.css"

const App = () => {
  const [movimientos, setMovimientos] = useState([]);

  const agregarMovimiento = (nuevoMovimiento) => {
    setMovimientos([...movimientos, nuevoMovimiento]);
  };

  const categorias = ['Salario','Ahorro','Pension', 'Alimentación', 'Carro','Paseos','Estudios']; 

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1>Presupuesto Mensual App</h1><br></br><br></br>
          <RegistroMovimientos categorias={categorias} agregarMovimiento={agregarMovimiento} />
        </div>
        <div className="col-md-6">
          <div className="resumen-container">
            <ResumenMensual movimientos={movimientos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
