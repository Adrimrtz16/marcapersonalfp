import './Pie.css'
import faceboock from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import tiktok from '../../assets/tiktok.svg'
import youtube from '../../assets/youtube.svg'
import logoReves from '../../assets/logoReves.png'
import useContador from '../../hooks/useContador'

const Pie = (props) => {

    const contadores = useContador();

    return (
        <>
            <div className="row">
                <div className="col-md-2 azul"></div>
                <div className="col-md-8 naranja">
                    <div className='row'>
                        <div className='col-md-4 text-center'>
                            <h4>Empresas</h4>
                            <h2>{contadores.numEmpresas}</h2> 
                        </div>
                        <div className='col-md-4 text-center'>
                            <h4>Proyectos</h4>       
                            <h2>{contadores.numProyectos}</h2> 
                        </div>
                        <div className='col-md-4 text-center'>
                            <h4>Estudiantes</h4>
                            <h2>{contadores.numEstudiantes}</h2> 
                        </div>
                    </div>
                </div>
                <div className="col-md-2 azul"></div>
            </div>
            <div className='row'>
                <div className='col-md-12 azul text-center'>
                    <p>CIFP Carlos III</p>
                    <p>CIFP Carlos III C/ Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301</p>
                    <div>
                        <a href="">
                            <img src={instagram} alt="" />
                        </a>
                        <a href="">
                            <img src={faceboock} alt="" />
                        </a>
                        <a href="">
                            <img src={twitter} alt="" />
                        </a>
                        <a href="">
                            <img src={tiktok} alt="" />
                        </a>
                        <a href="">
                            <img src={youtube} alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12 azul d-flex justify-content-center align-items-center tamaño-footer'>
                    <img src={logoReves} alt="" />
                    <p className='margen'>Marca Personal FP | Diseño Web CFGS Desarrollo de Aplicaciones Web © 2024</p>
                </div>
            </div>
        </>

    )
}

export default Pie;