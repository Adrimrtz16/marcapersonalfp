import './MenuGeneral.css';
import { Link, useLocation } from 'react-router-dom';

const MenuGeneral = () => {

    const location = useLocation();
    const paginaActual = location.pathname.split('/')[1];

    return (
        <div className="row gris">
            <div className="col-md-12">
                <h6 className='linksMenu'>
                    <span className={paginaActual === 'empresa' ? 'paginaActual' : ''}>|</span>
                    <Link to="/empresa" className='linkMenu'>
                        <span className={paginaActual === 'empresa' ? 'paginaActual' : ''}>EMPRESAS</span>
                    </Link>
                    <span className={(paginaActual === 'empresa' || paginaActual === 'centroeducativo') ? 'paginaActual' : ''}>|</span>
                    <Link to="/centroeducativo" className='linkMenu'>
                        <span className={paginaActual === 'centroeducativo' ? 'paginaActual' : ''}>CENTROS EDUCATIVOS</span>
                    </Link>
                    <span className={(paginaActual === 'centroeducativo' || paginaActual === 'estudiante') ? 'paginaActual' : ''}>|</span>
                    <Link to="/estudiante" className='linkMenu'>
                        <span className={paginaActual === 'estudiante' ? 'paginaActual' : ''}>ESTUDIANTES</span>
                    </Link>
                    <span className={paginaActual === 'estudiante' ? 'paginaActual' : ''}>|</span>
                </h6>
            </div>
        </div>
    );
}

export default MenuGeneral;