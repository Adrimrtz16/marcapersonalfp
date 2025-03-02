import empresa from '../../assets/empresa.jpg';
import colegio from '../../assets/school.jpg'; 
import estudiante from '../../assets/student.jpg';
import Menu from '../menu/Menu';
import './Cuerpo.css';
import { Link } from 'react-router-dom';

const Cuerpo = () => {

    return (
        <div className="row">
            <div className="col-12 col-md-4 menu">
                <Link to="/empresa" className='link'>
                    <Menu className="" imagen={empresa} texto={'Empresas'}></Menu>
                </Link>
            </div>
            <div className="col-12 col-md-4 menu">
                <Link to="/centroeducativo" className='link'>
                    <Menu className="" imagen={colegio} texto={'Centro educativo'}></Menu>  
                </Link> 
            </div>
            <div className="col-12 col-md-4 menu">
                <Link to="/estudiante" className='link'>
                    <Menu className="" imagen={estudiante} texto={'Estudiantes'}></Menu>
                </Link>
            </div>
        </div>
    )

}

export default Cuerpo;
