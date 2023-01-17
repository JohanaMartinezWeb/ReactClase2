import React from "react";
import '../styles/marvelcard.css'

function MarvelCard({id,image,logo,name,ability,type}){ //type puede ser Heroe o Villano
    return(
        <div className="marvelcard" key={id}>
            <div className="complete_card">

                <div className="card_front">
                    <img src={image} alt={name}/>
                </div>
                <div className="card_back">
                    <img src={logo} alt={name}/>
                    <div className="card_text">
                        <h1 >Nombre: {name}</h1>
                        <p ><b>Habilidad: </b>{ability}</p>
                        <p ><b>Categoría:</b> {type}</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default MarvelCard;

