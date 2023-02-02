import {useState, useEffect} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({gastos, presupuesto}) => {

    const [porcentaje, setPocentaje] = useState(10)
    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0)


    
    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        //console.log(totalGastado)

        const totalDisponible = presupuesto - totalGastado

        //calcular porcentaje
        const nuevoPorcentaje = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)
        
        
        setDisponible(totalDisponible)
        setGastado(totalGastado)
        setTimeout(() => {
            setPocentaje(nuevoPorcentaje)
        }, 750)
    }, [gastos])

     const formatearCantidad =(cantidad)=>
        cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
            styles={buildStyles({
                pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
                trailColor: "#F5F5F5",
                textColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
            })}
                value={porcentaje}
                text={`${porcentaje}% Gastado`}

            >
                
            </CircularProgressbar>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>
            <p className={`${disponible < 0 ? 'negativo': ""}`}>
                <span>Disponible: </span> {formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado: </span> {formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto
