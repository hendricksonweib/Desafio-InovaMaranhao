import Paragraph from '../ui/Paragraph'
import Title from '../ui/Title'
import PrimaryButton from '../ui/PrimaryButton'

import imgheader from "../../public/img-festa/image.png"

function Fest() {
  return (
    <>
      <section className='hero'>
          <div className='container'>
            <div className='hero-content'>
            <h3 className="subtitle-culinaria">Festas Típicas do Maranhão: Tradição e Cultura</h3>
            <Title texto="Descubra as Celebrações e a Riqueza Cultural Maranhense"/>
            <Paragraph fontWeight={"400"} texto="O Maranhão é um estado rico em tradições e celebrações culturais. As festas típicas maranhenses, como o Bumba Meu Boi, o São João e o Carnaval, são momentos de grande alegria e integração comunitária. Nessas ocasiões, a música, a dança e a culinária se destacam, proporcionando uma experiência única para moradores e visitantes. A cultura maranhense é celebrada com comidas típicas, danças folclóricas e uma atmosfera de festa que reflete a riqueza e diversidade do estado."  />
            <PrimaryButton texto="saiba mais"/>
            </div>
            <div className="hero-img">
            <img  className="img"  src={imgheader}alt=" imagens da turista"   style={{ width: '100%' }}/>
            </div>
          </div>
        </section>
      <div className="conteiner">
      <h2 className="culinaria-title">
      Celebrações Culturais do Maranhão: Um Mosaico de Tradições</h2>
      <div className="about-list-item">
      
<Paragraph fontWeight={"400"} texto='O Maranhão é conhecido por suas ricas e variadas tradições culturais, que se manifestam de forma exuberante em suas festas típicas. Entre as celebrações mais marcantes estão o Bumba Meu Boi, o São João e o Carnaval, cada uma com suas peculiaridades e encantos que atraem tanto os moradores locais quanto turistas do mundo inteiro.

O Bumba Meu Boi é, sem dúvida, a festa mais emblemática do Maranhão. Celebrada entre junho e julho, essa manifestação cultural é uma mistura de dança, música, teatro e religião. O enredo gira em torno da morte e ressurreição de um boi, e cada grupo, conhecido como "sotaque", apresenta sua própria versão da história. Os personagens são ricamente adornados, e as apresentações são acompanhadas por uma banda de instrumentos típicos como matracas, pandeirões e maracás. A festividade é uma verdadeira explosão de cores, ritmos e expressões culturais que revelam a alma do povo maranhense.

O São João no Maranhão é igualmente vibrante, marcado por danças como o tambor de crioula, quadrilhas e cacuriá. As festas juninas são realizadas em arraiais, espaços especialmente decorados para a ocasião, onde barracas de comidas típicas, como bolos, mingaus, e bebidas à base de milho, coco e amendoim, garantem o sabor regional. As fogueiras, os fogos de artifício e as bandeirinhas coloridas completam o cenário, criando uma atmosfera mágica e acolhedora. É uma época em que as famílias se reúnem para celebrar com muita música, dança e comida.

O Carnaval maranhense, por sua vez, é uma festa única, que mistura as tradições do samba com elementos afro-brasileiros e indígenas. O destaque vai para os blocos de rua, as escolas de samba e os tamborzeiros, que com seus tambores criam uma batida contagiante. O desfile dos blocos e das escolas de samba nas ruas de São Luís e outras cidades do estado é um espetáculo à parte, com fantasias elaboradas, carros alegóricos e muita animação. Além disso, o Maranhão conta com a "micareta", um carnaval fora de época que atrai milhares de foliões todos os anos.

Essas festas são mais do que simples eventos; elas representam a história, a identidade e a resistência cultural do Maranhão. Cada celebração é uma oportunidade para preservar e transmitir as tradições para as novas gerações, garantindo que a rica herança cultural do estado continue viva. Além disso, são momentos de integração social, onde pessoas de todas as idades e classes sociais se encontram para festejar juntos.

O Maranhão é um verdadeiro mosaico de tradições culturais, onde cada festa tem seu charme e importância. Participar dessas celebrações é mergulhar de cabeça na cultura maranhense, sentir o calor humano e a alegria de um povo que tem orgulho de suas raízes e sabe como celebrar a vida.'/>
      </div>
      </div>
    </>
  )
}

export default Fest