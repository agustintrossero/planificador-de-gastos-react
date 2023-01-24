import { useState } from 'react'
import Header from './components/Header'
import VentanaModal from './components/VentanaModal'
import IconoNuevoGasto from "./img/nuevo-gasto.svg"


function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [presupuestoValido, setPresupuestoValido] = useState(false)

  const [ventanaModal, setVentanaModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const handleNuevoGasto = () => {
    //console.log("diste click para añadir nuevo gasto")
    setVentanaModal(true)
    setTimeout(() => {
      setAnimarModal(true)
    }, 400)

  }

  return(
  <div className="App">
    <Header
      presupuesto = {presupuesto}
      setPresupuesto = {setPresupuesto}
      presupuestoValido = {presupuestoValido}
      setPresupuestoValido = {setPresupuestoValido}
    />

    {presupuestoValido ? (
    <div className="nuevo-gasto">
      <img 
      src={IconoNuevoGasto} 
      alt="Icono Nuevo Gasto"
      onClick={handleNuevoGasto} 
      />
    </div>
    ): null }
    {ventanaModal && <VentanaModal 
                      setVentanaModal={setVentanaModal}
                      animarModal={animarModal}
                      setAnimarModal={setAnimarModal}
                      />}

    
  </div>
  )

}

export default App
