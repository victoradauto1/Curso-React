import React from "react";
import './CarDetails.css'

const CarDetails = ({brand, model, year, color, km}) => {
  return (
    <div className="cardCar">
      <h1>Automotor</h1>
      <ul>
        <li>Marca:{brand}</li>
        <li>Modelo:{model}</li>
        <li>Ano:{year}</li>
        <li>Cor:{color}</li>
        <li>Km:{km}</li>
        {km==0?<li className="newModel">NOVO</li>:<li className="oldModel">Usado</li>}
      </ul>
    </div>
  );
};

export default CarDetails;
