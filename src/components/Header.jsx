import React from "react"
import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./ControlPresupuesto"

const Header = ({
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