import React from "react";
import "../comp-layout/InfoProfile.css";

export const InfoProfile = () => {
  return (
    <div className="info-profile-contain">
        <div className="info-profile">
        <p>Nombre del Colaborador</p>
        <p>Cargo del Colaborador</p>
      </div>
      <div className="img-profile">
        <img src="img/logo-arsheep.png" alt="Descripción" />
      </div>
      
    </div>
  );
};
