import React from 'react'
import "../style/global.css"


interface SubtitleProps{
    texto: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ texto}) =>{
  return (
    <h2 className="SubTitle">{texto}</h2>
  )
}

export default Subtitle