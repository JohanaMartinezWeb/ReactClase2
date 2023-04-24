


const Lista = props => {
    return (
        <div>
            <ul>
                {props.lista.map(item =>
                    <li key={item.id}>{item.titulo}</li>
                )}
            </ul>
      

        </div>
    );
};

export default Lista;
