import '../assets/css/cuadro.css';
import Tabla from './Tabla';

function Recuadro() {
    return (
        <div className="row22">

            <div className="shadow">

                <div className="card-body">
                    <div className="row">

                        <Tabla 
                        titulo1={["Billy Elliot", "Alicia en el país de las maravillas"]} 
                        duracion={[123, 142]} 
                        rating={[5, 4.8]} 
                        premio={[2, 3]} 
                        genero= {[[ <li>Drama</li>, <li>Comedia</li>],[ <li>Drama</li>, <li>Acción</li> ,<li>Comedia</li>]
                    ]} />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Recuadro;