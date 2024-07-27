import Nav from "../template/NAV/Nav"
import PrimaryButton from "../ui/PrimaryButton"
import Title from "../ui/Title"
import Subtitle from "../ui/Subtitle"
import Paragraph from "../ui/Paragraph"

function Home() {
  return (
   <>
     <PrimaryButton texto="Este e um botão!"/>
     <Title texto="Descubra as Riquezas Culturais e Naturais
do Maranhão"/>
     <Subtitle texto="Explore o Maranhão Agora!"/>
     <Paragraph fontWeight={"400"} texto="Explore a cultura vibrante, as belezas naturais e a riqueza histórica do Maranhão."/>
   </>
  )
}

export default Home