import { useState, useEffect } from 'react'
import Header from './components/Header'
import VentanaModal from './components/VentanaModal'
import ListadoGastos from './components/ListadoGastos'
import { generarID } from './helpers'
import IconoNuevoGasto from "./img/nuevo-gasto.svg"
import Filtros from './components/Filtros'


function App() {

  const [gastos, setGastos] = useState(
  localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )

  const [presupuestoValido, setPresupuestoValido] = useState(false)

  const [ventanaModal, setVentanaModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState("")
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(() => {
    if(Object.keys(gastoEditar).length > 0){
      //console.log("editando")
      setVentanaModal(true)
  
      setTimeout(() => {
        setAnimarModal(true)
      }, 400)  
      }
    }, [gastoEditar])

    useEffect(() => {
      localStorage.setItem('presupuesto', presupuesto ?? 0)
    },[presupuesto]) 

    useEffect(()=>{
      localStorage.setItem('gastos',	JSON.stringify(gastos) ?? [])
    }, [gastos])

    useEffect(()=>{
      if(filtro){
        //console.log(`filtrando por categoria ${filtro}`)
        const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
        //console.log(gastosFiltrados)
        setGastosFiltrados(gastosFiltrados)
      }
    },[filtro])


    useEffect(() => {
      const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
      //console.log(presupuestoLS)
      if(presupuestoLS > 0){
        setPresupuestoValido(true)
      }
    },[])

  const handleNuevoGasto = () => {
    //console.log("diste click para añadir nuevo gasto")
    setVentanaModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 400)
  }

  const guardarGasto = (gasto) => {
  //console.log(gasto)
  if(gasto.id){
    //actualizar
    const gastosActualizados = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
    setGastos(gastosActualizados)
    setGastoEditar({})
    
    } else {

    gasto.id = generarID() //gasto.id hace q se agregue al objeto gastos
    gasto.fecha=Date.now() //gasto.fecha hace q se agregue al objeto gastos
    setGastos([...gastos, gasto])
    }

    setAnimarModal(false)
    setTimeout(() => {
      setVentanaModal(false)
    }, 400);
  }


  const eliminarGasto = id => {
    //console.log("eliminar", id)
    const gastosActualizados = gastos.filter(gasto => gasto.id !== id);
    //console.log(gastosActualizados)
    setGastos(gastosActualizados); 
  }

  return(
  <div className={ventanaModal ? "fijar" : "" }>
    <Header
      gastos = {gastos}
      presupuesto = {presupuesto}
      setPresupuesto = {setPresupuesto}
      presupuestoValido = {presupuestoValido}
      setPresupuestoValido = {setPresupuestoValido}
    />

    {presupuestoValido ? (
      <>
        <main>
          <Filtros
            filtro={filtro}
            setFiltro={setFiltro}
          />
          <ListadoGastos
            gastos = {gastos}
            setGastoEditar = {setGastoEditar}
            eliminarGasto = {eliminarGasto}
            filtro={filtro}
            gastosFiltrados={gastosFiltrados}
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
                      gastoEditar={gastoEditar}
                      setGastoEditar={setGastoEditar}
                      />}

    
  </div>
  )

}

export default App
