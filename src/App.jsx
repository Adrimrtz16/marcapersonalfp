import './App.css'
import Cabecera from './componentes/cabecera/Cabecera'
import Cuerpo from './componentes/cuerpo/Cuerpo'
import Pie from './componentes/pie/Pie'
import Empresa from './componentes/empresa/Empresa'
import Centro from './componentes/centro/Centro'
import Estudiante from './componentes/estudiante/Estudiante'
import {Routes, Route} from 'react-router-dom'


function App() {

  return (

    <div className='container-fluid'>
      <Cabecera></Cabecera>

      <Routes>
        <Route path="" element={<Cuerpo></Cuerpo>}></Route>
        <Route path="/empresa" element={<Empresa></Empresa>}></Route>
        <Route path="/centroeducativo" element={<Centro></Centro>}></Route>
        <Route path="/estudiante" element={<Estudiante></Estudiante>}></Route>
      </Routes>
      <Pie></Pie>
    </div>
  )
}

export default App
