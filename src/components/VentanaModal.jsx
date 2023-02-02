import React from 'react'
import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from "../img/cerrar.svg"


const VentanaModal = ({
      setVentanaModal, 
      animarModal, 
      setAnimarModal, 
      guardarGasto,
      gastoEditar,
      setGastoEditar
    }) => {


    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [id, setId] = useState('')
    const [fecha, setFecha] = useState('')
    


    useEffect(() => {
      if(Object.keys(gastoEditar).length > 0){
        //console.log("editando")
              setNombre(gastoEditar.nombre)
              setCantidad(gastoEditar.cantidad)
              setCategoria(gastoEditar.categoria)
              setId(gastoEditar.id)
              setFecha(gastoEditar.fecha)
        }
    },[gastoEditar])
    
    

    const ocultarModal = () => {
        
        setAnimarModal(false)
        setGastoEditar({})
        
        setTimeout(() => {
          setVentanaModal(false)
        }, 400);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log("enviando datos")

        if([nombre, cantidad, categoria].includes('')){
          //console.log("campos vacios")
          setMensaje('Todos los campos son obligatorios')
          setTimeout(() => {
            setMensaje('')
          }, 3000);
          return
        }
        guardarGasto({nombre, cantidad, categoria, id, fecha});
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
      <form 
      onSubmit={handleSubmit}
      className={`formulario ${animarModal ?  "animar" : "cerrar"}`}
      >
        <legend>{gastoEditar.nombre ? "EDITANDO GASTO":"NUEVO GASTO"}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input 
            id='nombre'
            type="text"
            placeholder='Añade el nombre del gasto' 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input 
            id='cantidad'
            type="text"
            placeholder='Añade la cantidad del gasto: ej. 300' 
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
            <select 
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">-- Seleccione una categoría --</option>
              <option value="ahorro">Ahorro</option>
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
          value={gastoEditar.nombre ? "GUARDAR CAMBIOS":"AÑADIR GASTO"}
        />
      </form>
    </div>
  )
}

export default VentanaModal
