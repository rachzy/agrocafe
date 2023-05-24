import React from "react";
import "./Footer.css";
import LogoOrgulhasamenteIrrigante from "../../assets/imagens/logos/orgulhosamente-irrigante.png";
import FooterCima from "../../assets/imagens/botoes/footer-cima.png";
import LogoAgrocafeRodape from "../../assets/imagens/logos/logo-agrocafe-rodapé.png";
import LogoNetafimRodape from "../../assets/imagens/logos/logo-netafim-assinatura.png";
import FioEntreLogosRodape from "../../assets/imagens/demais-imagens/fio-entre-logos-rodapé.png";
import ImgPortifolio from "../../assets/imagens/logos/fio-entre-logos-rodapé.png";

const Footer = () => {
  return (
    <footer className="marrom background">
      <div className="ContainerConteudoCimaFooter">
        <img
          src={LogoOrgulhasamenteIrrigante}
          alt="LogoOrgulhasamenteIrrigante"
        />
        <img src={FooterCima} alt="Botão para subir" />
      </div>
      <div className="ContainerConteudoCentroFooter">
        <img src={LogoAgrocafeRodape} alt="" />
        <img src={FioEntreLogosRodape} alt="" />
        <span>
          Desenvolvido por <a href="#"><img src={ImgPortifolio} alt="Portifolio" /></a>
        </span>
      </div>
      <div className="verde background ContainerConteudoBaixoFooter">
        <img src={LogoNetafimRodape} alt="Assinatura Netafim" />
      </div>
    </footer>
  );
};

export default Footer
