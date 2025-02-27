import './App.css'
import Cabecera from './componentes/cabecera/Cabecera'
import Home from './paginas/home/Home'
import Empresa from './paginas/empresa/Empresa'
import Centro from './paginas/centro/Centro'
import Estudiante from './paginas/estudiante/Estudiante'
import {Routes, Route} from 'react-router-dom'
import EmpresaProyectos from './paginas/empresaProyectos/EmpresaProyectos'
import EmpresaAlumnos from './paginas/empresaAlumnos/EmpresaAlumnos'
import { useState } from 'react'

function App() {

  const [idioma, setIdioma] = useState('español');

  return (

    <div className='container-fluid'>
      <Cabecera setIdioma={setIdioma}></Cabecera>

      <Routes>
        <Route path="" element={<Home idioma={idioma}></Home>}></Route>
        <Route path="/empresa" element={<Empresa></Empresa>}></Route>
        <Route path="/empresa/proyectos" element={<EmpresaProyectos></EmpresaProyectos>}></Route>
        <Route path="/empresa/alumnos" element={<EmpresaAlumnos></EmpresaAlumnos>}></Route>
        <Route path="/centroeducativo" element={<Centro></Centro>}></Route>
        <Route path="/estudiante" element={<Estudiante></Estudiante>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
