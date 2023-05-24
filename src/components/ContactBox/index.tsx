import React from 'react'
import "./ContactBox.css";

interface IProps {
    icone: string;
    children: string;
}

const ContactBox: React.FC<IProps> = ({icone, children}) => {
  return (
    <div className="contact-box verde background">
        <div className="logo-box">
            <img src={icone} />
        </div>
        <div className="text-box">
        <p>{children}</p>
        </div>
    </div>
  )
}

export default ContactBox