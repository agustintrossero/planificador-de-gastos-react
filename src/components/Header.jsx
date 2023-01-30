import React from "react"
import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({
    gastos,
    presupuesto, 
    setPresupuesto,
    presupuestoValido,
    setPresupuestoValido
    }) => {
    return (
        <header>
            <h1>Planificador de Gastos</h1>

            {presupuestoValido ? (

                <ControlPresupuesto
                gastos = {gastos}
                presupuesto = {presupuesto}
                />

            ):(
                            <NuevoPresupuesto 
                            presupuesto = {presupuesto}
                            setPresupuesto = {setPresupuesto}
                            setPresupuestoValido = {setPresupuestoValido}
                        />
            )}

        </header>
    )
}

export default Header