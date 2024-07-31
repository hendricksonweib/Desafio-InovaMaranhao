import Title from "../ui/Title";
import Paragraph from "../ui/Paragraph";
import PrimaryButton from "../ui/PrimaryButton";
// imagens
import imgBanner from "../../public/Img-culinaria/photo-banner.webp";
import imgRomulo from "../../public/Img-culinaria/arroz-de-cuxa-romulo-estrela-2.webp";
import imgReceitaPeixada from "../../public/Img-culinaria/peixada-a-moda-maranhense.webp";
import imgReceitaTorta from "../../public/Img-culinaria/torta-de-camarao-thaynara-og.webp";
import imgReceitaBolo from "../../public/Img-culinaria/receita-bolo-de-tapioca-do-maranhao.webp";
import imgReceitaPave from "../../public/Img-culinaria/receita-pave-de-bacuri.webp";
import imgCarneSol from "../../public/Img-culinaria/carne-de-sol.jpg.webp";
import imgCaranguejo from "../../public/Img-culinaria/culinaria-maranhense-caranguejo.jpg.webp"
import imgArrozMar from "../../public/Img-culinaria/arroz-do-mar.jpg.webp";
import imgJucara from "../../public/Img-culinaria/jucara.jpg.webp";
import imgGuarana from "../../public/Img-culinaria/guarana-jesus.jpg.webp";
import imgTapioca from "../../public/Img-culinaria/tapioca-beiju.jpg";



function Culinaria() {
  return (
    <>
       <main>
        {/* Hero - a parte de banner da pagina */}
        <section className='hero'>
          <div className='container'>
            <div className='hero-content'>
            <h3 className="subtitle-culinaria">Comida típica do Maranhão</h3>
            <Title texto="Como é a culinária maranhense?"/>
            <Paragraph fontWeight={"400"} texto="A culinária maranhense tem raízes indígenas e influências europeias, especialmente portuguesa e francesa. Os pratos típicos regionais incluem carne de boi, como cozidão, panelada e mocotó, com uso de pedaços menos nobres no interior do estado. As frutas amazônicas e tropicais, como cupuaçu, bacuri, graviola, buriti, manga, laranja e cajá, são as mais consumidas."  />
            <PrimaryButton texto="saiba mais"/>
            </div>
            <div className="hero-img">
              <img  className="img"  src={imgBanner}alt=" imagens da turista" width={590} height={517}/>
            </div>
          </div>
        </section>
        {/* about - Ingredientes culinária*/}
        <section className="about">
          <div className="container">
            <div className="about-info">
              <h2 className="culinaria-title">Culinária Maranhense:Tesouros Da Nossa Terra</h2>

            </div>
            <div className="about-list">
              <div className="about-list-item">
                <h3 className="about-title">Ingredientes da culinária maranhense</h3>
                <Paragraph fontWeight={"400"} texto="A comida maranhense é conhecida por ser bem temperada, utilizando com frequência tempero seco (cominho e pimenta-do-reino) e corante de urucum. O cheiro-verde (coentro e cebolinha) também está sempre presente, desde o vinagrete até o feijão. Embora a culinária típica do Maranhão não utilize muita pimenta, como na Bahia, ela está sempre disponível, assim como a farinha de puba ou farinha d'água (caroço). Confira a seguir uma lista dos principais ingredientes usados na culinária maranhense"/>
              </div>
              <div className="about-list-item">
                <h3 className="about-title">Temperos nas comidas típicas do Maranhão</h3>
                <Paragraph fontWeight={"400"} texto="Os pratos maranhenses são ricos em temperos, como cominho em pó, tempero seco (cominho e pimenta-do-reino), corante de urucum (colorau), folha de louro e cheiro-verde (coentro e cebolinha). Outros ingredientes comuns incluem azeite de coco babaçu, leite de coco, pimenta de cheiro, tomate, cebola, pimentão e alho"/>
              </div>
              <div className="about-list-item">
                <h3 className="about-title">Carnes, peixes, mariscos e frutos do mar</h3>
                <Paragraph fontWeight={"400"} texto="A carne de sol, um prato nordestino, é muito presente no Maranhão. O cardápio maranhense também inclui peixes e frutos do mar, refletindo o fato de o estado possuir o segundo maior litoral do Brasil. Muitos pratos típicos são preparados com camarão fresco ou seco, pescada amarela, peixe serra, peixe pedra, caranguejo (inteiro, patinhas ou só a carne) e sururu (um tipo de marisco). Carnes menos nobres, como o bucho e a pata de boi, também são consumidas."/>
              </div>
              <div className="about-list-item">
                <h3 className="about-title">Origem Vegetal</h3>
                <Paragraph fontWeight={"400"} texto="Alguns legumes e verduras são frequentemente encontrados nos pratos e acompanhamentos maranhenses. Exemplos incluem maxixe, abóbora e quiabo, que geralmente acompanham o feijão, além da macaxeira. A folha de vinagreira, também conhecida como azedinha, é usada para preparar o cuxá e o arroz de cuxá."/>
              </div>
            </div>
          </div>
        </section>
        {/* revenues-  Receitas */}
        <section className="revenues">
          <div className="container">
            <div className="revenues-info">
              <h2 className="culinaria-title">Melhores Comidas Típicas Do Maranhão</h2>
              <h4 className="subtitle-culinaria revenues-subtitle">Separamos os pratos de comida típica mais famosos para você experimentar na sua viagem ao Maranhão.</h4>
            </div>
            <div className="revenues-list-cards">
              <div className="revenues-card">
                <div className="revenues-card-info">
                  <img src={imgRomulo} alt="receita de arroz de cuxa " width={290} height={217} className="img"  />
                  <h5 className="revenues-card-subtitle"> Arroz de Cuxá do Romulo Estrela</h5>
                  <a href="https://receitas.globo.com/receitas-da-tv/e-de-casa/arroz-de-cuxa-do-romulo-estrela.ghtml" target="_blank" className="revenues-card-link">Saiba Mais</a>
                </div>
                <div className="revenues-card-content">
                  <a href="https://receitas.globo.com/receitas-da-tv/e-de-casa/arroz-de-cuxa-do-romulo-estrela.ghtml" target="_blank"  className="revenues-title-link">
                  <h2 className="revenues-card-title">Arroz de Cuxá </h2>

                  </a>
                <Paragraph fontWeight={"400"} texto="O arroz de cuxá é um dos pratos mais típicos e icônicos do Maranhão. Preparado com arroz misturado à folha de vinagreira cozida e camarão seco, requer um preparo cuidadoso, pois o excesso da folha pode deixar o prato muito amargo. Este arroz é frequentemente servido como acompanhamento de pratos à base de peixe e é uma experiência culinária praticamente obrigatória para quem deseja conhecer a gastronomia maranhense."/>
              
                </div>
              </div>
              <div className="revenues-card feature">
                <div className="revenues-card-info">
                  <img src={imgReceitaPeixada} alt="receita de Peixada à Moda Maranhense " width={290} height={217} className="img"  />
                  <h5 className="revenues-card-subtitle"> Peixada à Moda Maranhense</h5>
                  <a href="https://receitas.globo.com/tipos-de-prato/peixes-e-frutos-do-mar/peixada-a-moda-maranhense-566eaf524d3885665300003f.ghtml" target="_blank" className="revenues-card-link">Saiba Mais</a>
                </div>
                <div className="revenues-card-content">
                  <a href="https://receitas.globo.com/tipos-de-prato/peixes-e-frutos-do-mar/peixada-a-moda-maranhense-566eaf524d3885665300003f.ghtml" target="_blank"  className="revenues-title-link">
                  <h2 className="revenues-card-title">Peixada à Moda Maranhense </h2>

                  </a>
                <Paragraph fontWeight={"400"} texto="A peixada à moda maranhense é um cozido que ganha um toque especial com a adição de camarões. Este prato pode ser servido acompanhado de arroz branco e pirão, tornando-se uma refeição completa e saborosa, representativa da culinária do Maranhão."/>
              
                </div>
              </div>
              <div className="revenues-card ">
                <div className="revenues-card-info">
                  <img src={imgReceitaTorta} alt="receita de Torta de Camarão " width={290} height={217} className="img"  />
                  <h5 className="revenues-card-subtitle"> Torta de Camarão</h5>
                  <a href="https://receitas.globo.com/tipos-de-prato/tortas/torta-de-camarao-receita.ghtml" target="_blank" className="revenues-card-link">Saiba Mais</a>
                </div>
                <div className="revenues-card-content">
                  <a href="https://receitas.globo.com/tipos-de-prato/tortas/torta-de-camarao-receita.ghtml" target="_blank"  className="revenues-title-link">
                  <h2 className="revenues-card-title">Torta de Camarão</h2>

                  </a>
                <Paragraph fontWeight={"400"} texto="Com uma massa leve e aerada, a torta de camarão é feita à base de ovos e recheada com camarão seco ou fresco. Este prato é muito consumido durante o São João e ganhou destaque quando a influenciadora Thaynara OG, junto com sua mãe, Dona Antonieta, a Mamãe OG, preparou a receita no programa Receitas dos Famosos."/>
              
                </div>
              </div>
              <div className="revenues-card  feature">
                <div className="revenues-card-info">
                  <img src={imgReceitaBolo} alt="receita de Bolo de Tapioca do Maranhão " width={290} height={217} className="img"  />
                  <h5 className="revenues-card-subtitle"> Bolo de Tapioca do Maranhão</h5>
                  <a href="https://receitas.globo.com/tipos-de-prato/bolos/bolo-de-tapioca-do-maranhao-55e771104d38855f9500003f.ghtml" target="_blank" className="revenues-card-link">Saiba Mais</a>
                </div>
                <div className="revenues-card-content">
                  <a href="https://receitas.globo.com/tipos-de-prato/bolos/bolo-de-tapioca-do-maranhao-55e771104d38855f9500003f.ghtml" target="_blank"  className="revenues-title-link">
                  <h2 className="revenues-card-title">Bolo de Tapioca do Maranhão</h2>

                  </a>
                <Paragraph fontWeight={"400"} texto="Com a combinação de erva-doce, coco, leite de coco e tapioca granulada, o bolo de tapioca do Maranhão surpreende pelo sabor delicioso. Um dos segredos para a massa ficar perfeita é hidratar a tapioca granulada com a mistura de leite e coco batidos no liquidificador."/>
              
                </div>
              </div>
              <div className="revenues-card  ">
                <div className="revenues-card-info">
                  <img src={ imgReceitaPave} alt="receita de Pavê de bacuri " width={290} height={217} className="img"  />
                  <h5 className="revenues-card-subtitle"> Pavê de bacuri</h5>
                  <a href="https://receitas.globo.com/receitas-da-tv/tempero-de-familia/pave-de-bacuri-gnt.ghtml" target="_blank" className="revenues-card-link">Saiba Mais</a>
                </div>
                <div className="revenues-card-content">
                  <a href="https://receitas.globo.com/receitas-da-tv/tempero-de-familia/pave-de-bacuri-gnt.ghtml" target="_blank"  className="revenues-title-link">
                  <h2 className="revenues-card-title">Pavê de bacuri</h2>

                  </a>
                <Paragraph fontWeight={"400"} texto="Bacuri, uma fruta de origem amazônica, tem forte presença no Maranhão. Para preparar o pavê de bacuri, Rodrigo Hilbert utiliza a polpa da fruta, juntamente com café bem forte, leite condensado e conhaque, criando uma sobremesa deliciosa e única."/>
              
                </div>
              </div>
              

            </div>
            

          </div>
        </section>
        {/* lista de foto */}
        <section className="photo">
          <div className="container">
           <div className="photo-info">
            <h2 className="culinaria-title ">
            Explore a Culinária do 
            Maranhão e Encante-se!
            </h2>
            <h4 className="subtitle-culinaria photo-subtitle">Descubra os Sabores Únicos do Nordeste Brasileiro</h4>

           </div>
           <ul className="list-photo">
            <li className="list-photo-item">
              <a href="#" className="list-photo-link">
                <img src={imgCarneSol} alt="receita" />

              </a>
              <h5 className="list-photo-title">CARNE DE SOL</h5>
              
            </li>
            <li className="list-photo-item">
              <a href="#" className="list-photo-link">
                <img src={imgCaranguejo} alt="receita" />

              </a>
              <h5 className="list-photo-title">CARANGUEJO</h5>
              
            </li>
            <li className="list-photo-item">
              <a href="#" className="list-photo-link">
                <img src={imgArrozMar} alt="receita" />

              </a>
              <h5 className="list-photo-title">ARROZ DO MAR</h5>
              
            </li>
            <li className="list-photo-item">
              <a href="#" className="list-photo-link">
                <img src={imgJucara} alt="receita" />

              </a>
              <h5 className="list-photo-title">JUÇARA</h5>
              
            </li>
            <li className="list-photo-item">
              <a href="#" className="list-photo-link">
                <img src={imgGuarana} alt="receita" />

              </a>
              <h5 className="list-photo-title">GUARANÁ JESUS</h5>
              
            </li>
            <li className="list-photo-item">
              <a href="#" className="list-photo-link">
                <img src={imgTapioca} alt="receita" />

              </a>
              <h5 className="list-photo-title"> BEIJU DE TAPIOCA</h5>
              
            </li>
      
         
          
           </ul>
          </div>
        </section>
    </main>
    </>
  )
}

export default Culinaria