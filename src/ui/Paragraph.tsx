import React from 'react'
import "../style/global.css"


interface ParagraphProps{
    texto: string;
    fontWeight?: string | number;
}

const Paragraph: React.FC<ParagraphProps> = ({ texto, fontWeight }) =>{
  return (
    <p className="Paragraph" style={{fontWeight: fontWeight }}>{texto}</p>
  )
}
export default Paragraph