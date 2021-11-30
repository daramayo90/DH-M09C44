import PropTypes from 'prop-types';
function Tabla(props) {
    const titulo1 = props.titulo1;
    const duracion = props.duracion;
    const rating = props.rating;
    const genero = props.genero;
    const premio = props.premio;

    return (
        <div className="row22">
            <table className="table">
                <tbody>
                    <tr>
                        <th>Título</th>
                        <th>Duración</th>
                        <th>Rating</th>
                        <th>Género</th>
                        <th>Premio</th>
                    </tr>
                </tbody>
                {titulo1.map((item1, i) => <tbody key={item1 + i}>
                     <tr>
                        <td>{titulo1[i]}</td>
                        <td>{duracion[i]}</td>
                        <td>{rating[i]}</td>
                        <td>
                            {genero[i]}
                        </td>
                        <td>{premio[i]}</td>
                    </tr>
                    
                </tbody>
                )}
                <tbody>
                    <tr>
                        <th>Título</th>
                        <th>Duración</th>
                        <th>Rating</th>
                        <th>Género</th>
                        <th>Premio</th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


Tabla.propTypes = {
    titulo1: PropTypes.array.isRequired,
    duracion: PropTypes.array.isRequired,
    rating: PropTypes.array.isRequired,
    genero: PropTypes.array.isRequired,
    premio: PropTypes.array.isRequired,
};
Tabla.defaultProps = {
    titulo1: "No se encuentra titulo",
    duracion: 0,
    rating: 0,
    genero: "no se encuentra genero asociado",
    premio: 0,
};

export default Tabla;