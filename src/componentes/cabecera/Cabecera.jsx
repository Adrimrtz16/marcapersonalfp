import Idioma from '../Idioma';
import logo from './assts/logo.png';

const cabecera = () => {

    return (
        <div className="row">
            <div className='col-md-1'>
                <img className="img" src='./assets/logo.png' alt=""/>
            </div>
            <div className='col-md-10 text-center'>
                <h1>Marca Personal</h1>
            </div>
            <div className='col-md-1'>
                <Idioma></Idioma>
            </div>
        </div>
    );
}

export default cabecera;