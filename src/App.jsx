import { useState } from 'react'
import Header from './components/Header'
import VentanaModal from './components/VentanaModal'
import ListadoGastos from './components/ListadoGastos'
import { generarID } from './helpers'
import IconoNuevoGasto from "./img/nuevo-gasto.svg"


function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [presupuestoValido, setPresupuestoValido] = useState(false)

  const [ventanaModal, setVentanaModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState([])

  const handleNuevoGasto = () => {
    //console.log("diste click para añadir nuevo gasto")
    setVentanaModal(true)
    setTimeout(() => {
      setAnimarModal(true)
    }, 400)
  }

  const guardarGasto = (gasto) => {
  //  console.log(gasto)
  gasto.id = generarID() //gasto.id hace q se agregue al objeto gastos
  gasto.fecha=Date.now() //gasto.fecha hace q se agregue al objeto gastos
  setGastos([...gastos, gasto])

  setAnimarModal(false)
  setTimeout(() => {
    setVentanaModal(false)
  }, 400);
  }

  return(
  <div className={ventanaModal && "fijar" }>
    <Header
      presupuesto = {presupuesto}
      setPresupuesto = {setPresupuesto}
      presupuestoValido = {presupuestoValido}
      setPresupuestoValido = {setPresupuestoValido}
    />

    {presupuestoValido ? (
      <>
        <main>
          <ListadoGastos
            gastos = {gastos}
          />
        </main>
        <div className="nuevo-gasto">
          <img 
          src={IconoNuevoGasto} 
          alt="Icono Nuevo Gasto"
          onClick={handleNuevoGasto} 
          />
        </div>
      </>
    ): null }
    {ventanaModal && <VentanaModal 
                      setVentanaModal={setVentanaModal}
                      animarModal={animarModal}
                      setAnimarModal={setAnimarModal}
                      guardarGasto={guardarGasto}
                      />}

    
  </div>
  )

}

export default App
