import Paragraph from '../ui/Paragraph'
import Title from '../ui/Title'
import PrimaryButton from '../ui/PrimaryButton'
import YouTubeVideo from '../ui/YouTubeVideo'
import imgheader from "../../public/img-artesanato/image.png"
import ImageGrid from '../template/ImageGrid/ImageGrid'

import img1 from "../../public/img-artesanato/image1.png"
import img2 from "../../public/img-artesanato/image2.png"
import img3 from "../../public/img-artesanato/image3.png"
import img4 from "../../public/img-artesanato/image4.png"
import img5 from "../../public/img-artesanato/image5.png"
import img6 from "../../public/img-artesanato/image6.png"
import img7 from "../../public/img-artesanato/image7.png"
import img8 from "../../public/img-artesanato/image8.png"
import img9 from "../../public/img-artesanato/image9.png"

const imageUrls = [
img1,
img2,
img3,
img4,
img5,
img6,
img7,
img8,
img9
]

export default function Artesanato() {
  return (
    <>
     <section className='hero'>
          <div className='container'>
            <div className='hero-content'>
            <h3 className="subtitle-culinaria">Artesanatos do Maranhão: A Arte que Encanta e Preserva Tradições</h3>
            <Title texto="Descubra a riqueza cultural e a beleza única das peças artesanais maranhenses."/>
            <Paragraph fontWeight={"400"} texto="Os artesanatos do Maranhão são uma expressão vibrante da cultura e tradição da região, combinando técnicas ancestrais com criatividade contemporânea. Desde as intricadas rendas de bilro até os coloridos trabalhos em cerâmica e madeira, cada peça conta uma história única, refletindo a rica herança cultural e o talento dos artesãos locais. Esses trabalhos não só embelezam a vida cotidiana, mas também preservam e celebram as tradições do Maranhão."  />
            <PrimaryButton texto="saiba mais"/>
            </div>
            <div className="hero-img">
            <img  className="img"  src={imgheader}alt=" imagens da turista"   style={{ width: '100%' }}/>
            </div>
          </div>
      </section>
      <div className="conteiner">
        <h2 className="culinaria-title">
        Artesanato Maranhense: Tradições em Cada Detalhe</h2>
        <div className="about-list-item">
            <Paragraph fontWeight={"400"} texto='Os artesanatos do Maranhão são uma expressão rica e vibrante da cultura nordestina, representando uma confluência de tradições e habilidades que remontam às raízes históricas da região. Cada peça artesanal é uma janela para a história e o modo de vida do povo maranhense, refletindo não apenas a beleza estética, mas também o profundo vínculo com a natureza e a ancestralidade.

            Entre as formas mais emblemáticas de artesanato estão as rendas de bilro, uma técnica delicada que transforma fios de algodão em intricadas e elegantes peças. As rendas, muitas vezes utilizadas em roupas e toalhas, são elaboradas com precisão e paciência, transmitindo o legado das gerações passadas. Essas rendas são mais do que simples adornos; são um símbolo da resistência cultural e da continuidade das tradições locais.

            A cerâmica é outra forma expressiva de artesanato no Maranhão, com peças que variam de potes utilitários a obras de arte decorativas. Feitas à mão e frequentemente adornadas com padrões tradicionais, as peças de cerâmica não só servem a propósitos práticos, mas também capturam a essência das práticas culturais e estéticas da região. As cores vibrantes e os desenhos geométricos refletem a exuberância do ambiente natural e a criatividade dos artesãos.

            A arte em madeira também ocupa um lugar especial no panorama artesanal maranhense. Esculturas e entalhes em madeira revelam a habilidade e a visão artística dos mestres artesãos. As peças podem variar de figuras folclóricas a objetos do cotidiano, todas imbuídas de um profundo senso de identidade cultural.

            Além de suas qualidades estéticas, os artesanatos do Maranhão desempenham um papel crucial na preservação e celebração das tradições locais. Eles não apenas embelezam os espaços e a vida cotidiana, mas também são um testemunho da capacidade do povo maranhense de manter viva sua herança cultural diante das mudanças e desafios modernos.

            Explorar o artesanato do Maranhão é mergulhar em um universo de histórias, habilidades e paixão, onde cada peça conta uma história e cada detalhe revela um aspecto da rica tapeçaria cultural da região. O artesanato maranhense é uma celebração da criatividade, da tradição e da identidade, oferecendo uma experiência genuína e memorável para todos que o apreciam.'/>
        </div>
      </div>
      <div className='container'>
        <YouTubeVideo videoUrl='https://www.youtube.com/watch?v=uBe8ROuUb_I&t=4s'/>
      </div>
      <div className="conteiner">
        <div className="about-list-item">
              <Paragraph fontWeight={"400"} texto='O artesanato do Maranhão é uma expressão vibrante e multifacetada da cultura regional, refletindo uma rica tapeçaria de tradições, influências e técnicas que foram transmitidas ao longo de gerações. Este setor artesanal é mais do que uma simples produção de objetos; é um testemunho do espírito criativo e da identidade cultural do Maranhão, unindo passado e presente de maneira fascinante.

              Uma das formas mais reconhecíveis do artesanato maranhense é a renda de bilro, uma técnica intrincada que utiliza pequenos bilros para tecer fios de algodão em padrões complexos e delicados. Esta tradição remonta ao período colonial, quando as técnicas europeias se misturaram com as práticas locais para criar um estilo único. As rendas de bilro são apreciadas não apenas por sua beleza, mas também pela habilidade e paciência necessárias para sua confecção. Cada peça é feita manualmente, com detalhes minuciosos que refletem a precisão e a dedicação dos artesãos.

              Além das rendas, a cerâmica maranhense é uma parte essencial da identidade cultural da região. As peças de cerâmica são produzidas em uma variedade de formas e estilos, desde utensílios domésticos até objetos decorativos. A cerâmica maranhense é conhecida por suas cores vibrantes e padrões distintos, muitas vezes inspirados na natureza e nas tradições locais. As técnicas usadas para criar essas peças envolvem métodos ancestrais que foram aperfeiçoados ao longo dos anos, mantendo a autenticidade e a qualidade das peças produzidas.

              A arte em madeira também desempenha um papel significativo no artesanato maranhense. Escultores e entalhadores locais trabalham com madeira nativa para criar uma gama diversificada de itens, desde figuras religiosas até representações de animais e elementos folclóricos. As peças de madeira são muitas vezes esculpidas à mão com uma precisão que revela a profunda conexão dos artesãos com os materiais e com as histórias que estão contando. A arte em madeira do Maranhão é um reflexo do ambiente natural e da rica herança cultural da região.

              Além dos materiais tradicionais, o artesanato maranhense também inclui a produção de tecidos e bordados que incorporam técnicas e padrões únicos. Esses tecidos muitas vezes apresentam motivos regionais e são utilizados na confecção de roupas, acessórios e decoração. O bordado, por exemplo, é uma prática que adiciona uma camada de complexidade e beleza aos tecidos, com padrões que frequentemente têm significados culturais ou simbólicos.

              O impacto do artesanato no Maranhão vai além do valor estético das peças produzidas. Ele desempenha um papel crucial na economia local e na preservação das tradições culturais. Muitos artesãos trabalham em pequenas oficinas ou ateliês, onde suas habilidades são passadas para novas gerações, garantindo que as técnicas e os conhecimentos não se percam com o tempo. Além disso, o artesanato serve como um importante meio de expressão e identidade para as comunidades locais, promovendo um senso de pertencimento e orgulho cultural.

              Os mercados e feiras de artesanato no Maranhão são pontos de encontro vibrantes onde visitantes e moradores podem explorar e adquirir essas obras-primas. Esses eventos não só oferecem uma plataforma para os artesãos exibirem e venderem seu trabalho, mas também proporcionam uma oportunidade para os visitantes aprenderem sobre as tradições e técnicas que fazem parte da rica tapeçaria cultural da região.

              Em suma, o artesanato do Maranhão é uma celebração da criatividade, da tradição e da identidade. Cada peça é uma expressão única do legado cultural e das habilidades dos artesãos, oferecendo uma visão fascinante de uma região rica em história e talento. Ao apreciar e apoiar o artesanato maranhense, estamos contribuindo para a preservação de uma herança cultural vital e reconhecendo o valor dos criadores que mantêm vivas essas tradições preciosas.'/>
        </div>
      </div>
      <div className="conteiner">
      <ImageGrid images={imageUrls} />
      </div>
    </>
  )
}
