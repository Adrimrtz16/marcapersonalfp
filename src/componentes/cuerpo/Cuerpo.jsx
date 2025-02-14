import empresa from '../../assets/empresa.jpg';
import colegio from '../../assets/school.jpg'; 
import estudiante from '../../assets/student.jpg';
import Link from '../link/Link';
import './Cuerpo.css';

const cuerpo = () => {

    return (
        <div className="row">
            <div className="col-4 red">
                <Link imagen={empresa} texto={'empresa'}></Link>
            </div>
            <div className="col-4 blue">
                <a className='d-flex justify-content-center' href="">
                    <img src={colegio} alt="" />
                </a>
            </div>
            <div className="col-4 green">
                <a className='d-flex justify-content-center' href="">
                    <img src={estudiante} alt="" />
                </a>
            </div>
        </div>
    )

}

export default cuerpo;
