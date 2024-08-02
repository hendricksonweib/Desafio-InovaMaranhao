
import PrimaryButton from "../ui/PrimaryButton";
import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";

// Importe as imagens

import homeImg from "../../public/img-home/home-img.png";
import culinariaIcon from "../../public/img-home/icons/Culinaria.png";
import festaIcon from "../../public/img-home/icons/Festa.png";
import artesanatoIcon from "../../public/img-home/icons/Artesanato.png";
import turismoIcon from "../../public/img-home/icons/Turísmo.png";
import alcantaraImg from "../../public/img-home/maranhao-alcantara.webp";
import chapadaImg from "../../public/img-home/maranhao-chapada.jpg.webp";
import lencoisImg from "../../public/img-home/passeios-lencois-maranhenses.webp";
import culturaIcon from "../../public/img-home/icons/Cultura.png";
import naturezaIcon from "../../public/img-home/icons/Natureza.png";
import historiaIcon from "../../public/img-home/icons/História.png";
import viagemImg from "../../public/img-home/viagem-maranhao.png";
import comentarioImg from "../../public/img-home/imageComentario.png";


function Home() {
  return (
    <>
      {/* HOME HERO - conteúdo inicial da página */}
      <section className="home-hero">
        <div className="container">
          <div className="home-hero-content">
            <h4 className="hero-label">
              Maranhão Encantado: Festas, Natureza e História
            </h4>
            <Title texto="Descubra as Riquezas Culturais e Naturais do Maranhão" />
            <Paragraph
              fontWeight={"400"}
              texto="Explore a cultura vibrante, as belezas naturais e a riqueza histórica do Maranhão."
            />
            <PrimaryButton texto="Descubra as Maravilhas do Maranhão!" />
          </div>
          <div className="home-hero-img">
            <img src={homeImg} alt="Home Image" />
          </div>
        </div>
      </section>
      {/* Categorias */}
      <section className="categories">
        <div className="container">
          <div className="categories-info">
            <h4 className="subtitle categories-subtitle">Categorias</h4>
            <h2 className="title categories-title">Explore o Maranhão Agora!</h2>
          </div>
          <div className="categories-lists">
            <ul className="categories-list list">
              <li className="categories-list-item">
                <a href="#" className="categories-list-link">
                  <div className="categories-list-img">
                    <img src={culinariaIcon} alt="Culinária" className="img" width={67} height={75} />
                  </div>
                  <div className="categories-list-info">
                    <h5 className="categories-list-title">Culinária</h5>
                    <p className="categories-list-text">
                      Delicie-se com arroz de cuxá e guaraná Jesus.
                    </p>
                  </div>
                </a>
                <span></span>
              </li>
              <li className="categories-list-item">
                <a href="#" className="categories-list-link">
                  <div className="categories-list-img">
                    <img src={festaIcon} alt="Festas" className="img" width={67} height={75} />
                  </div>
                  <div className="categories-list-info">
                    <h5 className="categories-list-title">Festas</h5>
                    <p className="categories-list-text">
                      Celebre com bumba meu boi e festas juninas.
                    </p>
                  </div>
                </a>
                <span></span>
              </li>
              <li className="categories-list-item">
                <a href="#" className="categories-list-link">
                  <div className="categories-list-img">
                    <img src={artesanatoIcon} alt="Artesanato" className="img" width={67} height={75} />
                  </div>
                  <div className="categories-list-info">
                    <h5 className="categories-list-title">Artesanato</h5>
                    <p className="categories-list-text">
                      Explore redes, cerâmicas e bordados autênticos.
                    </p>
                  </div>
                </a>
                <span></span>
              </li>
              <li className="categories-list-item">
                <a href="#" className="categories-list-link">
                  <div className="categories-list-img">
                    <img src={turismoIcon} alt="Turísmo" className="img" width={67} height={75} />
                  </div>
                  <div className="categories-list-info">
                    <h5 className="categories-list-title">Turísmo</h5>
                    <p className="categories-list-text">
                      Visite Lençóis Maranhenses e São Luís histórica.
                    </p>
                  </div>
                </a>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* Charms State - explore belezas e encantos do estado */}
      <section className="charms-state">
        <div className="container">
          <div className="charms-state-info">
            <h4 className="categories-subtitle subtitle">
              Melhores pontos turísticos
            </h4>
            <h2 className="charms-state-title title">
              Explore as Belezas e Encantos do Nosso Estado
            </h2>
          </div>
          <div className="charms-state-cards">
            <div className="charms-state-card">
              <img src={alcantaraImg} alt="Alcântara" className="img state-card-img" />
              <div className="charms-state-card-info">
                <h4 className="charms-state-card-title">Alcântara</h4>
                <div className="charms-state-card-content">
                  <img src={comentarioImg} alt="icon" width={20} height={20} className="img" />
                  <p className="state-card-content-text">Viagem de 10 dias</p>
                </div>
              </div>
            </div>
            <div className="charms-state-card">
              <img src={chapadaImg} alt="Chapada das Mesas" className="img state-card-img" />
              <div className="charms-state-card-info">
                <h4 className="charms-state-card-title">Chapada das Mesas</h4>
                <div className="charms-state-card-content">
                  <img src={comentarioImg} alt="icon" width={20} height={20} className="img" />
                  <p className="state-card-content-text">Viagem de 5 dias</p>
                </div>
              </div>
            </div>
            <div className="charms-state-card">
              <img src={lencoisImg} alt="Lençóis Maranhenses" className="img state-card-img" />
              <div className="charms-state-card-info">
                <h4 className="charms-state-card-title">Lençóis Maranhenses</h4>
                <div className="charms-state-card-content">
                  <img src={comentarioImg} alt="icon" width={20} height={20} className="img" />
                  <p className="state-card-content-text">Viagem de 15 dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits - Vantagens de Uma Viagem Inesquecível */}
      <section className="Benefits">
        <div className="container">
          <div className="Benefits-content">
            <div className="Benefits-info">
              <h4 className="Benefits-subtitle subtitle">Conheça o Maranhão:</h4>
              <h2 className="Benefits-title">Vantagens de Uma Viagem Inesquecível</h2>
            </div>
            <ul className="Benefits-list list">
              <li className="Benefits-list-item">
                <img src={culturaIcon} alt="Natureza Deslumbrante" className="img" />
                <div className="Benefits-list-content">
                  <h4 className="Benefits-list-title">Natureza Deslumbrante</h4>
                  <p className="Benefits-list-text">
                    Descubra os Lençóis Maranhenses e suas paisagens únicas de dunas e lagoas cristalinas.
                  </p>
                </div>
              </li>
              <li className="Benefits-list-item">
                <img src={naturezaIcon} alt="Cultura Vibrante" className="img" />
                <div className="Benefits-list-content">
                  <h4 className="Benefits-list-title">Cultura Vibrante</h4>
                  <p className="Benefits-list-text">
                    Viva a intensidade das festas juninas e a magia do bumba meu boi, símbolos da cultura maranhense.
                  </p>
                </div>
              </li>
              <li className="Benefits-list-item">
                <img src={historiaIcon} alt="História Preservada" className="img" />
               
                <div className="Benefits-list-content">
                  <h4 className="Benefits-list-title">História Preservada</h4>
                  <p className="Benefits-list-text">
                    Explore São Luís e Alcântara, cidades históricas com arquitetura colonial e patrimônios culturais ricos.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="Benefits-img">
            <img src={viagemImg} alt="Vantagens de Uma Viagem" className="img" />
          </div>
        </div>
      </section>
      {/* Depoimentos */}
      <section className="depoimentos">
        <div className="conteiner" id="comentariosid">
          <Paragraph
            fontWeight={"400"}
            texto="DEPOIMENTOS"
          />
          <Title texto="O que as pessoas dizem sobre" />
        </div>
        <img className="imgdepoimento" src={comentarioImg} alt="Depoimentos" />
      </section>
      {/* Inscrição para mais informações */}
      <section className="depoimentos">
        <div className="cardimput">
          <Title texto="Inscreva-se para Receber Mais Informações!" />
          <Paragraph
            fontWeight={"800"}
            texto="Deixe seu email e não perca nenhuma novidade sobre o Maranhão."
          />
          <div className="input-conteiner">
            <input className="inputEmail" type="email" placeholder="Digite seu email!" />
            <button className="inputbtn">Enviar</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
