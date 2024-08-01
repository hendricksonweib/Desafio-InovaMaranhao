import React from 'react'
import "../style/global.css"


interface TextProps{
    texto: string;
}

const Text: React.FC<TextProps> = ({ texto }) =>{
  return (
    <div className="TextParagraph" style={{ whiteSpace: 'pre-line' }}>
    {texto}
  </div>
  )
}
export default Text