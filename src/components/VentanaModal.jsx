import React from 'react'
import CerrarBtn from "../img/cerrar.svg"
import { useState } from 'react'

const VentanaModal = ({setVentanaModal}) => {

    const ocultarModal = () => {
        setVentanaModal(false)
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
    </div>
  )
}

export default VentanaModal
