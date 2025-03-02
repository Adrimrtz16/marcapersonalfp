import './Cabecera.css';
import logo from '../../assets/logo.png';
import Idiomas from '../idiomas/Idiomas';
import { Link } from 'react-router-dom';

const Cabecera = ({setIdioma}) => {

    return (
        <div className="row cabecera">
            <div className='col-12 col-md-1'>
                <Link to="">
                    <img className="w-100" src={logo} alt=""/>        
                </Link>
            </div>
            <div className='col-md-10 text-center d-none d-sm-block'>
                <h1 className='marcaPersonal'>Marca Personal FP</h1>
            </div>
            <div className='col-5 col-md-1'>
                <Idiomas setIdioma={setIdioma}></Idiomas>
            </div>
        </div>
    );
}

export default Cabecera;