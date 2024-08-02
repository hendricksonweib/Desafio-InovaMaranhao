import PrimaryButton from "../ui/PrimaryButton";
import Title from "../ui/Title";

import Paragraph from "../ui/Paragraph";
// Imagens
import imgicon2 from "../../public/img-home/icons/Festa.png";
import imgicon3 from "../../public/img-home/icons/Artesanato.png";
import imgicon4 from "../../public/img-home/icons/Turísmo.png";
import imgIcon5 from "../../public/img-home/icons/Seta.png";
import imgIcon6 from "../../public/img-home/icons/Cultura.png";
import imgIcon7 from "../../public/img-home/icons/Natureza.png";
import imgIcon8 from "../../public/img-home/icons/História.png";
import ImagemComentario from "../../public/img-home/imageComentario.png";

import imgCard1 from "../../public/img-home/maranhao-alcantara.webp";
import imgCard2 from "../../public/img-home/maranhao-chapada.jpg.webp";
import imgCard3 from "../../public/img-home/passeios-lencois-maranhenses.webp";
import img1 from "../../public/img-home/viagem-maranhao.png";





function Home() {''
  return (
    <>
    {/* HOME HERO - conteudo inicial da pagina */}
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
          <img src="/img-home/home-img.png" alt="Home Image" />
          
          </div>
        </div>
      </section>
      {/* Categorias*/}
      <section className="categories ">
        <div className="container">
          <div className="categories-info">
            <h4 className="subtitle categories-subtitle ">Categorias</h4>
            <h2 className="title categories-title">Explore o Maranhão Agora!</h2>
          </div>
          <div className="categories-lists">
             <ul className="categories-list list">
              <li className="categories-list-item">
                <a href="#" className="categories-list-link">
                  <div className="categories-list-img">
                  <img src="/img-home/icons/Culinaria.png" alt="icon" className="img" width={67} height={75} />
                  </div>
                  <div className="categories-list-info">
                    <h5 className="categories-list-title">
                    Culinária
                    </h5>
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
                    <img src={imgicon2} alt="icon" className="img " width={67}  height={75}/>
                  </div>
                  <div className="categories-list-info">
                    <h5 className="categories-list-title">
                    Festas
                    </h5>
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
                    <img src={imgicon3} alt="icon" className="img " width={67}  height={75}/>
                  </div>
                  <div className="categories-list-info">
                    <h5 className="categories-list-title">
                    Artesanato
                    </h5>
                    <p className="categories-list-text">
                    Explore redes, cerâmicas e bordados autênticos.
                    </p>
                  </div>
                </a>
                <span></span>
              </li>
              <li className="categories-list-item ">
                <a href="#" className="categories-list-link">
                  <div className="categories-list-img">
                    <img src={imgicon4} alt="icon" className="img " width={67}  height={75}/>
                  </div>
                  <div className="categories-list-info">
                    <h5 className="categories-list-title">
                    Turísmo
                    </h5>
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
      {/*Charms State - explore belezas encantos estado   */}
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
              <img src={imgCard1} alt="Alcântara"  className="img state-card-img"/>
              <div className="charms-state-card-info">
                <h4 className="charms-state-card-title">Alcântara</h4>
                <div className="charms-state-card-content">
                  <img src={imgIcon5 } alt="icon" width={20} height={20}  className="img"/>
                  <p className="state-card-content-text">Viagem de 10 dias</p>
                </div>
            
              </div>
            </div>
            <div className="charms-state-card">
              <img src={imgCard2} alt="Chapada das Mesas"  className="img state-card-img"/>
              <div className="charms-state-card-info">
                <h4 className="charms-state-card-title">Chapada das Mesas</h4>
                <div className="charms-state-card-content">
                  <img src={imgIcon5 } alt="icon" width={20} height={20}  className="img"/>
                  <p className="state-card-content-text">Viagem de 5 dias</p>
                </div>
            
              </div>
            </div>
            <div className="charms-state-card">
              <img src={imgCard3} alt="Lençóis Maranhenses"  className="img state-card-img"/>
              <div className="charms-state-card-info">
                <h4 className="charms-state-card-title">Lençóis Maranhenses</h4>
                <div className="charms-state-card-content">
                  <img src={imgIcon5 } alt="icon" width={20} height={20}  className="img"/>
                  <p className="state-card-content-text">Viagem de 15 dias</p>
                </div>
            
              </div>
            </div>
          </div>
        </div>

      </section>
      {/*Benefits - Vantagens de Uma Viagem Inesquecível   */}
      <section className="Benefits">
        <div className="container">
          <div className="Benefits-content">
            <div className="Benefits-info">
              <h4 className="Benefits-subtitle subtitle">Conheça o Maranhão:</h4>
              <h2 className="Benefits-title">Vantagens de Uma Viagem Inesquecível</h2>
            </div>
            <ul className="Benefits-list list">
              <li className="Benefits-list-item ">
                <img src={imgIcon6} alt="icon 6"  className="img"/>
                <div  className="Benefits-list-content">
                  <h4 className="Benefits-list-title">Natureza Deslumbrante</h4>
                  <p className="Benefits-list-text">Descubra os Lençóis Maranhenses e suas paisagens únicas de dunas e lagoas cristalinas.</p>
                </div>
              </li>
              <li className="Benefits-list-item ">
                <img src={imgIcon7} alt="icon 7"  className="img"/>
                <div  className="Benefits-list-content">
                  <h4 className="Benefits-list-title">Cultura Vibrante</h4>
                  <p className="Benefits-list-text">Viva a intensidade das festas juninas e a magia do bumba meu boi, símbolos da cultura maranhense.</p>
                </div>
              </li>
              <li className="Benefits-list-item ">
                <img src={imgIcon8} alt="icon 8"  className="img"/>
                <div  className="Benefits-list-content">
                  <h4 className="Benefits-list-title">História Preservada</h4>
                  <p className="Benefits-list-text">Explore São Luís e Alcântara, cidades históricas com arquitetura colonial e patrimônios culturais ricos..</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="Benefits-img">
            <img src={img1} alt="Vantagens de Uma Viagem"  className="img"/>
          </div>
        </div>
      </section>
      <section className="depoimentos">
        <div className="conteiner" id="comentariosid">
            <Paragraph
              fontWeight={"400"}
              texto="DEPOIMENTOS"
            />
            <Title texto="O que as pessoas 
            dizem sobre" />
        </div>
        <img className="imgdepoimento" src={ImagemComentario} alt="" />
      </section>
      <section className="depoimentos">

        <div className="cardimput">
      <Title texto="Inscreva-se para Receber Mais Informações!" />
      <Paragraph
              fontWeight={"800"}
              texto="Deixe seu email e não perca nenhuma novidade sobre o Maranhão."
            />
        <div className="input-conteiner">
          <input className="inputEmail" type="email" placeholder="Digite seu email!"/>
          <button className="inputbtn">Enviar</button>
        </div>
        </div>
      </section>
    </>
  );
}

export default Home;
