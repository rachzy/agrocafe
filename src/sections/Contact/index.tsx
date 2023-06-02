import React from "react";
import "./Contact.css";

import WhatsAppIcon from "../../assets/imagens/botoes/whatsapp.png";
import TelefoneIcon from "../../assets/imagens/botoes/telefone-fixo.png";
import EmailIcon from "../../assets/imagens/botoes/e-mail.png";
import FacebookIcon from "../../assets/imagens/botoes/facebook.png";
import InstagramIcon from "../../assets/imagens/botoes/instagram.png";
import PointerIcon from "../../assets/imagens/botoes/pointer.png";

import ContactBox from "../../components/ContactBox/index.js";

interface IContact {
  icone: string;
  titulo: string;
}

const Contact = () => {
  const contacts: IContact[] = [
    {
      icone: WhatsAppIcon,
      titulo: "34 9 9824-1600",
    },
    {
      icone: TelefoneIcon,
      titulo: "34 3831-2996",
    },
    {
      icone: EmailIcon,
      titulo: "agrocafepatrocinio\n@agrocafe.com",
    },
    {
      icone: FacebookIcon,
      titulo: "agrocafe\nirrigacao",
    },
    {
      icone: InstagramIcon,
      titulo: "agrocafe\nirrigacao",
    },
  ];

  function renderContacts() {
    return contacts.map((contact) => {
      return (
        <ContactBox key={contact.icone} icone={contact.icone}>
          {contact.titulo}
        </ContactBox>
      );
    });
  }
  return (
    <section id="contato">
      <div className="contact-fake-button marrom background">
        <h1>Vamos conversar?</h1>
      </div>
      <h2 className="contact-title contact-label marrom label">
        Escolha como você prefere conversar conosco:
      </h2>
      <div className="contact-wrapper">{renderContacts()}</div>
      <div className="local-wrapper">
        <img src={PointerIcon} alt="pointer" />
        <h2 className="contact-label marrom label">
          Av. Faria Pereira, 1611 - Bairro Constantino
          <br />
          Patrocínio - MG, 38747-032
        </h2>
      </div>
    </section>
  );
};

export default Contact;
