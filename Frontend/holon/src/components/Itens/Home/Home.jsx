import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <div className="mainDiv">
      <h1 className='topText' id="text-attributes">A mudança começa com você</h1>
      <h1 className='bottomText' id="text-attributes">Faça parte de uma rede de auxílio dedicada a ajudar pessoas em situação de rua através de uma simples plataforma online</h1>
      <div className="btnChamado">
        <a href="/" className="linkChamado">Abrir um chamado</a>
      </div>
      
    </div>
  );
}
