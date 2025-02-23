import '../menuGeneral/MenuGeneral.css';
import { Link, useLocation } from 'react-router-dom';

const MenuCentros = () => {

    const location = useLocation();
    const paginaActual = location.pathname;

    return (
        <div className="row gris">
            <div className="col-md-12">
                <h6 className='linksMenu'>
                    <Link to="/empresa" className='linkMenu'>
                        <span className={paginaActual === '/empresa' ? 'paginaActual' : ''}>Empresas</span>
                    </Link>
                    <Link to="/empresa/proyectos" className='linkMenu'>
                        <span className={paginaActual === '/empresa/proyectos' ? 'paginaActual' : ''}>Proyectos</span>
                    </Link>
                    <Link to="/empresa/alumnos" className='linkMenu'>
                        <span className={paginaActual === '/empresa/alumnos' ? 'paginaActual' : ''}>Alumnos</span>
                    </Link>
                </h6>
            </div>
        </div>
    )
}

export default MenuCentros;