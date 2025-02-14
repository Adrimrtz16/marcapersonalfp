import './Idiomas.css';
import español from '../../assets/spain.svg';
import ingles from '../../assets/uk.svg';

const idiomas = () => {

    return (
        <div className='d-flex w-100'>
            <button className='idioma'><img className="bandera" src={español} alt=""/></button>
            <button className='idioma'><img className='bandera' src={ingles} alt=""/></button>
        </div>
    );
}

export default idiomas;