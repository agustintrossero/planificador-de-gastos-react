import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  return(
  <div className="App">
    <Header
      presupuesto = {presupuesto}x
      setPresupuesto = {setPresupuesto}
    />
  </div>
  )

}

export default App
