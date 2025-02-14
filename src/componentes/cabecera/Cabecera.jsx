import './Cabecera.css';
import logo from '../../assets/logo.png';
import Idiomas from '../idiomas/Idiomas';

const cabecera = () => {

    return (
        <div className="row cabecera">
            <div className='col-md-1'>
                <img className="w-100" src={logo} alt=""/>
            </div>
            <div className='col-md-10 text-center'>
                <h1>Marca Personal FP</h1>
            </div>
            <div className='col-md-1'>
                <Idiomas></Idiomas>
            </div>
        </div>
    );
}

export default cabecera;