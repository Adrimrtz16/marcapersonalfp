import './Idiomas.css';
import español from '../../assets/spain.svg';
import ingles from '../../assets/uk.svg';

const Idiomas = (props) => {

    function cambiarIdioma(idioma) {
        props.setIdioma(idioma);
    }
    
    return (
        <div className='d-flex w-100'>
            <button className='idioma' onClick={() => cambiarIdioma('español')}><img className="bandera" src={español} alt=""/></button>
            <button className='idioma' onClick={() => cambiarIdioma('english')}><img className='bandera' src={ingles} alt=""/></button>
        </div>
    );
}

export default Idiomas;