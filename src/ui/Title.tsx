import React from 'react'
import "../style/global.css"

interface TitleProps{
    texto: string;
}

const Title: React.FC<TitleProps> = ({ texto}) =>{
  return (
    <h1 className="Title">{texto}</h1>
  )
}


export default Title