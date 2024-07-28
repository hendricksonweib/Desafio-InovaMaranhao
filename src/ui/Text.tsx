import React from 'react'
import "../style/global.css"


interface TextProps{
    texto: string;
}

const Text: React.FC<TextProps> = ({ texto }) =>{
  return (
    <p className="TextParagraph">{texto}</p>
  )
}
export default Text