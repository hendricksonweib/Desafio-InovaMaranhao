import React from 'react';
import "../index.css"

interface PrimaryButtonProps {
  texto: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ texto }) => {
  return <button className="primary__button">{texto}</button>;
};

export default PrimaryButton;
             