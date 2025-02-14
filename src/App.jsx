import './App.css'
import Cabecera from './componentes/cabecera/Cabecera'
import Cuerpo from './componentes/cuerpo/Cuerpo'
import Pie from './componentes/pie/Pie'

function App() {

  return (

    <div className='container-fluid'>
      <Cabecera></Cabecera>
      <Cuerpo></Cuerpo>
      <Pie></Pie>
    </div>
  )
}

export default App
