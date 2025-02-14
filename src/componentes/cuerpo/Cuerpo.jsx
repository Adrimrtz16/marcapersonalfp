import empresa from '../../assets/empresa.jpg';
import colegio from '../../assets/school.jpg'; 
import estudiante from '../../assets/student.jpg';
import Menu from '../menu/Menu';
import './Cuerpo.css';

const cuerpo = () => {

    return (
        <div className="row">
            <div className="col-4 menu">
                <Menu className="" imagen={empresa} texto={'Empresas'}></Menu>
            </div>
            <div className="col-4 menu">
                <Menu className="" imagen={colegio} texto={'Centro educativo'}></Menu>   
            </div>
            <div className="col-4 menu">
                <Menu className="" imagen={estudiante} texto={'Estudiantes'}></Menu>
            </div>
        </div>
    )

}

export default cuerpo;
