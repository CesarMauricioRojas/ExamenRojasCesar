import React from "react";

const Card = ({titulo,autor}) => {
  return(
    <div className="tarjeta">
       <h3>¡Libro enviado exitosamente!</h3>
       <p>Titulo: {titulo}, autor: {autor}</p>
    </div>
  )
}


export default Card;