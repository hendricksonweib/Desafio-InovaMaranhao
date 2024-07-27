import React from 'react'
import Title from '../ui/Title'
import Paragraph from '../ui/Paragraph'
import PrimaryButton from '../ui/PrimaryButton'
import "../style/global.css"

interface HeaderTextProps{
    ParagraphText: string;
    TitleText: string;
    ButtonText: string;
}

const HeaderText: React.FC<HeaderTextProps> = ({ParagraphText,TitleText,ButtonText}) => {
  return (
    <section className='HeaderText'>
        <Paragraph texto={ParagraphText}/>
        <Title texto={TitleText}/>
        <PrimaryButton texto={ButtonText}/>

    </section>
  )
}

export default HeaderText