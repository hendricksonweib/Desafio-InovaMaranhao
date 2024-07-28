         
import HeaderText from '../layout/HeaderText'
import FestaImg from "../assets/FestaImg.svg"
import Text from '../ui/Text'
function Fest() {
  return (
    <>
    {/* conteiner__body: sessão pra deixar tudo alinhado na vertical */}
    <main className="conteiner__body">
    {/* header__conteiner: sessão pra estilizar a primeira parte da página */}
      <section className="header__conteiner">
      {/* HeaderText: componente de titulos*/}
        <HeaderText ParagraphText='FESTAS' TitleText='Celebre as Festas do Maranhão' ButtonText='Saiba Mais'/>
        {/* header__img: estilização padrão para imagens*/}
        <img className='header__img' src={FestaImg} alt="" />
      </section>
      {/* Text: componente responsável pelos paragrafos do site */}
      <Text texto='Descubra os encantos diversos do Maranhão, um estado que combina paisagens naturais de tirar o fôlego com um patrimônio cultural rico e vibrante. Os Lençóis Maranhenses, com suas dunas imponentes e lagoas de águas cristalinas, são um verdadeiro paraíso para os amantes da natureza e dos esportes ao ar livre. Enquanto isso, as cidades históricas de São Luís e Alcântara oferecem um mergulho na história colonial do Brasil, com arquitetura bem preservada e monumentos que contam séculos de história. Não deixe de explorar também a rica gastronomia local, onde pratos como o arroz de cuxá e o tambaqui assado proporcionam uma experiência gastronômica única. Seja você um aventureiro em busca de novos horizontes ou um aficionado por cultura e história, o Maranhão promete uma viagem inesquecível e cheia de descobertas.'/>
      <Text texto='Descubra os encantos diversos do Maranhão, um estado que combina paisagens naturais de tirar o fôlego com um patrimônio cultural rico e vibrante. Os Lençóis Maranhenses, com suas dunas imponentes e lagoas de águas cristalinas, são um verdadeiro paraíso para os amantes da natureza e dos esportes ao ar livre. Enquanto isso, as cidades históricas de São Luís e Alcântara oferecem um mergulho na história colonial do Brasil, com arquitetura bem preservada e monumentos que contam séculos de história. Não deixe de explorar também a rica gastronomia local, onde pratos como o arroz de cuxá e o tambaqui assado proporcionam uma experiência gastronômica única. Seja você um aventureiro em busca de novos horizontes ou um aficionado por cultura e história, o Maranhão promete uma viagem inesquecível e cheia de descobertas.'/>
    </main>
    </>
  )
}

export default Fest