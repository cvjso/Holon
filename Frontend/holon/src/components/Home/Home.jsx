import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <>
      <div className='Text' id="text-attributes">A mudança começa com você</div>
      <div className='bottomText' id="text-attributes">Faça parte de uma rede de auxílio dedicada a ajudar pessoas em situação de rua através de uma simples plataforma online</div>
      <div className="btnChamado">
      {<a href="/" className="linkChamado">Abrir um chamado</a>}
      </div>
    </>
  );
}
