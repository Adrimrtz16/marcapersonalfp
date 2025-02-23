import './Cabecera.css';
import logo from '../../assets/logo.png';
import Idiomas from '../idiomas/Idiomas';
import { Link } from 'react-router-dom';

const Cabecera = () => {

    return (
        <div className="row cabecera">
            <div className='col-md-1'>
                <Link to="">
                    <img className="w-100" src={logo} alt=""/>        
                </Link>
            </div>
            <div className='col-md-10 text-center'>
                <h1 className='marcaPersonal'>Marca Personal FP</h1>
            </div>
            <div className='col-md-1'>
                <Idiomas></Idiomas>
            </div>
        </div>
    );
}

export default Cabecera;