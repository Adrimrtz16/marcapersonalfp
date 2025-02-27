import { useState } from 'react';
import Cuerpo from '../../componentes/cuerpo/Cuerpo';
import Pie from '../../componentes/pie/Pie';

const Home = ({idioma}) => {

    return (
        <div>
            <Cuerpo></Cuerpo>
            <Pie idioma={idioma}></Pie>
        </div>
    )
}    

export default Home;