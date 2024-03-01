import React from 'react';
import "../styles/ResumenMensual.css";

const ResumenMensual = ({ movimientos }) => {
  const ingresos = movimientos.filter(movimiento => movimiento.tipo === 'ingreso');
  const gastos = movimientos.filter(movimiento => movimiento.tipo === 'gasto');

const totalIngresos = ingresos.reduce((total, movimiento) => {
  const cantidad = parseFloat(movimiento.cantidad);
  return isNaN(cantidad) ? total : total + cantidad;
}, 0);
const totalGastos = gastos.reduce((total, movimiento) => {
  const cantidad = parseFloat(movimiento.cantidad);
  return isNaN(cantidad) ? total : total + cantidad;
}, 0);

const totalNeto = totalIngresos - totalGastos;
  return (
    <div>
      <h2 className="resumen-title">Resumen Mensual</h2><br></br>
      <div className="resumen-container">
        <div className="resumen-ingresos">
          <h3>Ingresos</h3>
          {ingresos.length > 0 ? (
            <table className="resumen-table">
              <thead>
                <tr>
                  <th>Categoría</th>
                  <th>Descripción</th>
                  <th>Cantidad</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {ingresos.map((movimiento, index) => (
                  <tr key={index}>
                    <td>{movimiento.categoria}</td>
                    <td>{movimiento.descripcion}</td>
                    <td>${movimiento.cantidad}</td>
                    <td>{movimiento.fecha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No hay ingresos para mostrar. Por favor, llene el formulario.</p>
          )}
          <p>Total de Ingresos: ${totalIngresos.toFixed(2)}</p>
        </div>
        <div className="resumen-gastos">
          <h3>Gastos</h3>
          {gastos.length > 0 ? (
            <table className="resumen-table">
              <thead>
                <tr>
                  <th>Categoría</th>
                  <th>Descripción</th>
                  <th>Cantidad</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {gastos.map((movimiento, index) => (
                  <tr key={index}>
                    <td>{movimiento.categoria}</td>
                    <td>{movimiento.descripcion}</td>
                    <td>${movimiento.cantidad}</td>
                    <td>{movimiento.fecha}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No hay gastos para mostrar. Por favor, llene el formulario.</p>
          )}
          <p>Total de Gastos: {typeof totalGastos === 'number' ? `$${totalGastos.toFixed(2)}` : 'No hay gastos'}</p>
        </div>
      </div>
      <p>Total Neto: ${totalNeto.toFixed(2)}</p>
    </div>
  );
};

export default ResumenMensual;
