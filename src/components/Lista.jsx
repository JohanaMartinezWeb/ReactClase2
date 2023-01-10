import React from "react";

const Lista = props => {
    return (
        <ul>
            {props.lista.map(item =>
                <li key={item.id}>{item.titulo}</li>
            )}
        </ul>
    );
};

export default Lista;
