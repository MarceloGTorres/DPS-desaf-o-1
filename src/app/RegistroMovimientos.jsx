import React, { useState } from 'react';
import "../styles/ResumenMensual.css";

const RegistroMovimientos = ({ categorias, agregarMovimiento }) => {
  const [nuevoMovimiento, setNuevoMovimiento] = useState({
    tipo: 'ingreso',
    categoria: categorias[0], 
    descripcion: '',
    cantidad: '',
    fecha: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoMovimiento({ ...nuevoMovimiento, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarMovimiento(nuevoMovimiento);
    setNuevoMovimiento({
      tipo: 'ingreso',
      categoria: categorias[0],
      descripcion: '',
      cantidad: '',
      fecha: ''
    });
  };

  return (
    <div className="form-container">
      <h2>Registro de Movimientos</h2><br></br>
      <form className="formulario" onSubmit={handleSubmit}>
      <label>
          Movimiento:
          <select name="tipo" value={nuevoMovimiento.tipo} onChange={handleChange}>
            <option value="ingreso">Ingreso</option>
            <option value="gasto">Gasto</option>
          </select>
        </label>
        <br />
        <label>
          Categoría:
          <select name="categoria" value={nuevoMovimiento.categoria} onChange={handleChange}>
            {categorias.map((categoria, index) => (
              <option key={index} value={categoria}>{categoria}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Descripción:
          <input type="text" name="descripcion" value={nuevoMovimiento.descripcion} onChange={handleChange} />
        </label>
        <br />
        <label>
          Cantidad:
          <input type="number" name="cantidad" value={nuevoMovimiento.cantidad} onChange={handleChange} />
        </label>
        <br />
        <label>
          Fecha:
          <input type="date" name="fecha" value={nuevoMovimiento.fecha} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};
export default RegistroMovimientos;
