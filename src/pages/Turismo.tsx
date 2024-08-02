import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";
import PrimaryButton from "../ui/PrimaryButton";
import ImageGrid from '../template/ImageGrid/ImageGrid'

import lencoisImg from '../../public/img-turismo/lencois-maranhenses.jpg';
import centroHistoricoImg from '../../public/img-turismo/centro-historico.jpg';
import alcantaraImg from '../../public/img-turismo/alcantara.jpg';
import saoromaoImg from '../../public/img-turismo/cachoeira-saoromao.jpeg';
import beirarioImg from '../../public/img-turismo/beira-rio.jpg';
import backImg from '../../public/img-turismo/cover.jpg';

import img1 from "../../public/img-turismo/img1.jpg"
import img2 from "../../public/img-turismo/img2.jpg"
import img3 from "../../public/img-turismo/img3.jpg"
import img4 from "../../public/img-turismo/img4.jpg"
import img5 from "../../public/img-turismo/img5.jpg"
import img6 from "../../public/img-turismo/img6.jpg"
import img7 from "../../public/img-turismo/img7.jpg"
import img8 from "../../public/img-turismo/img8.jpg"
import img9 from "../../public/img-turismo/img9.jpg"

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

function Turismo() {
  return (
    <>
      <main>
      <section className='hero'>
          <div className='container'>
            <div className='hero-content'>
            <h3 className="subtitle-turismo">Combinando Natureza e Cultura</h3>
            <Title texto="Natureza, Cultura e Aventura!"/>
            <Paragraph fontWeight={"400"} texto="O Maranhão é um destino que encanta os sentidos. Um mosaico de paisagens exuberantes, rica cultura e história, e uma gastronomia inigualável aguardam por você. Explore as imensas dunas dos Lençóis Maranhenses, desvende os mistérios da Floresta Amazônica, e perca-se nas ruas charmosas do Centro Histórico de São Luís. Mergulhe em festas tradicionais, como o Bumba-meu-boi, e saboreie pratos típicos como o arroz de cuxá e o bobó de camarão. No Maranhão, cada dia é uma nova aventura!"  />
            <PrimaryButton texto="saiba mais"/>
            </div>
            <div className="hero-img">
              <img  className="img"  src={backImg}alt="Background Maranhão" width={590} height={517}/>
            </div>
          </div>
        </section>
        <section className="about">
          <div className="container">
            <div className="about-info">
              <h2 className="turism-title">Turismo no Maranhão: Descubra a Beleza, Cultura e Aventuras que Este Destino Único tem a Oferecer!</h2>
            </div>
            <div className="about-list">
              <div className="about-list-item">
                <h3 className="about-title">Paisagens Deslumbrantes e Diversidade Ecológica</h3>
                <Paragraph fontWeight={"400"} texto="O Maranhão é um estado que encanta com sua rica diversidade natural. Desde as imensas dunas dos Lençóis Maranhenses, com suas lagoas cristalinas, até as exuberantes paisagens da Chapada das Mesas, o estado oferece paisagens de tirar o fôlego. A rica fauna e flora, com espécies únicas, e os diversos ecossistemas, como o Delta do Parnaíba, fazem do Maranhão um destino perfeito para os amantes da natureza e da aventura. Uma viagem inesquecível te espera nesse paraíso brasileiro!"/>
              </div>
              <div className="about-list-item">
                <h3 className="about-title">Aventura e Lazer para Todos os Gostos</h3>
                <Paragraph fontWeight={"400"} texto="O Maranhão é um verdadeiro playground para os aventureiros de plantão! As opções são diversas e para todos os gostos. Desde as trilhas desafiadoras da Chapada das Mesas, com suas cachoeiras e cânions, até os esportes aquáticos no Delta do Parnaíba, como kitesurf e stand-up paddle. Para quem busca relaxar, as praias do Maranhão oferecem paisagens paradisíacas e águas cristalinas. E para os amantes da cultura, as festas populares e a rica história do estado proporcionam experiências únicas. Com tantas opções, o Maranhão garante momentos de pura diversão e aventura para todos os visitantes."/>
              </div>
              <div className="about-list-item">
                <h3 className="about-title">Cultura Vibrante e História Rica</h3>
                <Paragraph fontWeight={"400"} texto="O Maranhão é um estado que respira cultura e história. Sua capital, São Luís, é um verdadeiro museu a céu aberto, com casarões coloniais coloridos, igrejas barrocas e um centro histórico reconhecido pela UNESCO. As festas populares, como o Bumba-meu-boi e o Carnaval, são verdadeiras explosões de alegria e tradição. A culinária maranhense, rica em sabores e influências, é mais uma prova da diversidade cultural do estado. Uma viagem ao Maranhão é uma imersão em um universo de tradições e costumes que encantam a todos."/>
              </div>
              </div>
          </div>
        </section>
        <section className="turism">
          <div className="container">
            <div className="turism-info">
              <h2 className="turism-title">Melhores Locais Para Você Conhecer o Maranhão</h2>
              </div>
            <div className="turism-list-cards">
              <div className="turism-card">
                <div className="turism-card-info">
                  <img src={lencoisImg} alt="Lençóis Maranhenses" width={290} height={217} className="img"  />
                  <h5 className="turism-card-subtitle">Pelas Dunas e Além</h5>
                  <a href="https://www.viajarpelomundo.com/2021/11/lencois-maranhenses-pelas-dunas-e-alem.html" target="_blank" className="turism-card-link">Saiba Mais</a>
                </div>
                <div className="turism-card-content">
                  <h2 className="turism-card-title">Lençóis Maranhenses </h2>
                <Paragraph fontWeight={"400"} texto="Os Lençóis Maranhenses, localizados no Maranhão, são um deslumbrante parque nacional conhecido por suas vastas dunas de areia branca e lagoas cristalinas formadas durante a temporada de chuvas. A paisagem única e surreal, combinada com a rica cultura local e a culinária maranhense, atraem visitantes do mundo todo. É um destino que oferece uma experiência inesquecível de beleza natural e tradição cultural."/>
                </div>
              </div>
              <div className="turism-card feature">
                <div className="turism-card-info">
                  <img src={centroHistoricoImg} alt="Centro Histórico São Luís" width={290} height={217} className="img"  />
                  <h5 className="turism-card-subtitle">O Passado no Presente</h5>
                  <a href="https://imirante.com/noticias/sao-luis/2008/03/16/centro-historico-de-sao-luis-e-foco-de-imigrantes" target="_blank" className="turism-card-link">Saiba Mais</a>
                </div>
                <div className="turism-card-content">
                  <h2 className="turism-card-title">Centro Histórico de São Luís </h2>
                <Paragraph fontWeight={"400"} texto="O Centro Histórico de São Luís, capital do Maranhão, é um Patrimônio Mundial da UNESCO, famoso por suas ruas de paralelepípedos, casarões coloniais e azulejos portugueses coloridos. Este bairro preserva a rica história e cultura da cidade, com museus, igrejas e praças que datam dos séculos XVII e XVIII. A área é um testemunho vivo da herança cultural e arquitetônica de São Luís, oferecendo aos visitantes uma viagem no tempo através de suas charmosas e históricas ruas."/>
                </div>
              </div>
              <div className="turism-card">
                <div className="turism-card-info">
                  <img src={alcantaraImg} alt="Alcântara" width={290} height={217} className="img"  />
                  <h5 className="turism-card-subtitle">A Incrível Cidade das Ruínas</h5>
                  <a href="https://www.youtube.com/watch?v=BGRrrYjByTc" target="_blank" className="turism-card-link">Saiba Mais</a>
                </div>
                <div className="turism-card-content">
                  <h2 className="turism-card-title">Alcântara</h2>
                <Paragraph fontWeight={"400"} texto="Alcântara, localizada a uma curta distância de barco de São Luís, é uma cidade histórica repleta de ruínas coloniais e belas igrejas. Fundada no século XVII, Alcântara foi um importante centro econômico durante o período colonial e ainda mantém muitos de seus edifícios históricos bem preservados. A cidade oferece uma rica experiência cultural e histórica, com festividades tradicionais, como a Festa do Divino, e uma atmosfera tranquila e pitoresca que encanta os visitantes."/>
                </div>
              </div>
              <div className="turism-card feature">
                <div className="turism-card-info">
                  <img src={saoromaoImg} alt="Cachoeira de São Romão" width={290} height={217} className="img"  />
                  <h5 className="turism-card-subtitle">Um Lugar Paradisíaco</h5>
                  <a href="https://www.youtube.com/watch?v=zubFrFd47vk" target="_blank" className="turism-card-link">Saiba Mais</a>
                </div>
                <div className="turism-card-content">
                  <h2 className="turism-card-title">Cachoeira de São Romão</h2>
                <Paragraph fontWeight={"400"} texto="A Cachoeira de São Romão, situada no Parque Nacional da Chapada das Mesas, no Maranhão, é uma das maiores cachoeiras do estado. Com uma impressionante queda d'água que proporciona um espetáculo natural, é um destino popular para os amantes da natureza e aventureiros. A região ao redor oferece trilhas, piscinas naturais e uma rica biodiversidade, tornando a visita à cachoeira uma experiência inesquecível de conexão com a natureza."/>
                </div>
              </div>
              <div className="turism-card">
                <div className="turism-card-info">
                  <img src={beirarioImg} alt="Beira-Rio de Imperatriz" width={290} height={217} className="img"  />
                  <h5 className="turism-card-subtitle">Cultura e Beleza em Imperatriz</h5>
                  <a href="https://www.youtube.com/watch?v=Yt51Va1T8Os" target="_blank" className="turism-card-link">Saiba Mais</a>
                </div>
                <div className="turism-card-content">
                  <h2 className="turism-card-title">Beira-Rio</h2>
                <Paragraph fontWeight={"400"} texto="A Beira-Rio de Imperatriz é um dos principais pontos turísticos da cidade de Imperatriz, Maranhão. Situada às margens do Rio Tocantins, oferece uma bela vista panorâmica e é um local ideal para passeios, atividades ao ar livre e apreciação do pôr do sol. A área é repleta de bares, restaurantes e espaços de lazer, tornando-se um ponto de encontro popular para moradores e visitantes que buscam relaxar e desfrutar da beleza natural da região."/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="turismo-final">
          <div className="turismo-grid-title">
              <h2 className="turismo-grid-title-name">
                Venha Conhecer os Belos Lugares do Maranhão!
              </h2>
            </div>
          <div id="turismo-grid">
            <ImageGrid images={imageUrls} />
          </div>
        </div>
        </main>
    </>
  );
}

export default Turismo;