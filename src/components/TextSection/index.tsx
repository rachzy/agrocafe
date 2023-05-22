import React from "react";
import "./TextSection.css";

interface IProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const TextSection: React.FC<IProps> = ({ children, style }) => {
  return (
    <section style={style} className="text-section verde background">
      <div className="content center space-between">{children}</div>
    </section>
  );
};

export default TextSection;
