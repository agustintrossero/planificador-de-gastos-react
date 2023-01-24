import React from 'react'
import CerrarBtn from "../img/cerrar.svg"
import { useState } from 'react'

const VentanaModal = ({setVentanaModal, animarModal, setAnimarModal}) => {

    const ocultarModal = () => {
        
        setAnimarModal(false)
        
        setTimeout(() => {
          setVentanaModal(false)
        }, 400);
    }

  return (
    <div className='modal'>
      <div className="cerrar-modal">
        <img 
            src={CerrarBtn} 
            alt="Boton de Cerrar Modal" 
            onClick={ocultarModal}
        />
      </div>
      <form action="" className={`formulario ${animarModal ?  "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input 
            id='nombre'
            type="text"
            placeholder='Añade el nombre del gasto' 
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input 
            id='cantidad'
            type="text"
            placeholder='Añade la cantidad del gasto: ej. 300' 
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
            <select id="categoria">
              <option value="">-- Seleccione una categoría --</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos Varios</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
            </select>
        </div>

        <input 
          type="submit" 
          value="Añadir Gasto" 
        />
      </form>
    </div>
  )
}

export default VentanaModal
