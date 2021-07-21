import Layout from "../components/Layout"

const Services = () => (
  <Layout title="Our Services">
    <div className="fullService">  <div id="h">
      Our Services
    </div>
    <div className="services">
      <div className="services-list">
        <div className="item">
          <img src="/static/services/prod.jpeg" />
          <div className="he">Product Photography</div>
          {/* <p>Let us handle the tedious task of photographing your inventory.</p> */}
        </div>
        <div className="item">
          <img src="/static/services/checkout.jpeg" />
          <div id="thing" className="he">Digital Storefronts</div>
          {/* <p className='pe'>We create custom online shopping and checkout experiences.</p> */}
        </div>
      </div>
    </div>
    </div>  
    <style jsx>{`
      .services {
        max-width: 1000px;
        margin: 0 auto;
   
        border-radius: 5px;
      }
      .services-list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 25px;


        border-radius: 3px;
      }
.fullService {
  background-color: rgb(255, 255, 255);
  padding-bottom: 900px;
}
 
      .item {
       

border-radius: 3px;
        box-shadow: 5px 3px 5px 0px #1d1d1d33,
         -5px -3px 5px 0px rgba(255, 255, 255, 0.479);

      }

      #h {
        margin-top: 0;
        padding-top: 30px;
        padding-bottom: 20px;
        font-size: 20px;
       
      }
      .he {
        font-size: 20px;
        padding-top: 0;
        margin-top: 0;
        padding-bottom: 15px;
      }

  

      img {
        max-width: 100%;
        border-radius: 6px;
        padding: 10px;
        padding-bottom: 0;
      }
      h2 {
        margin: 0 0 5px 0;
      }
      p {
        font-size: 18px;
        color: #777;
      }
      @media (max-width: 600px) {
        .services .item {
          width: auto;
          padding: 10px 20px;
        }

        .services-list {
          grid-template-columns: 1fr;
          grid-gap: 15px;
        }

        .he {
          font-size: 18px;
        }
      }
    `}</style>
  </Layout>
)

export default Services
