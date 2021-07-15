import Layout from "../components/Layout"

const Services = () => (
  <Layout title="Our Services">
    <h1 id="h" className="he">Our Services</h1>
    <div className="services">
      <div className="services-list">
        <div className="item">
          <img src="/static/services/prod.jpeg" />
          <h2 className="he">Product Photography</h2>
          {/* <p>Let us handle the tedious task of photographing your inventory.</p> */}
        </div>
        <div className="item">
          <img src="/static/services/checkout.jpeg" />
          <h2 className="he">Digital Storefronts</h2>
          {/* <p className='pe'>We create custom online shopping and checkout experiences.</p> */}
        </div>
      </div>
    </div>
    <style jsx>{`
      .services {
        max-width: 1000px;
        margin: 0 auto;
      }
      .services-list {
        padding: 0 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }

      #h {
        margin-top: 0;
        padding-top: 30px;
      }
      .he {
  font-size: 22px;
}
      .services .item {
        padding: 20px;
        margin-bottom: 40px;
        width: 50%;
      }
      img {
        max-width: 100%;
        border-radius: 4px;
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

        .he {
  font-size: 18px;
}
      }
    `}</style>
  </Layout>
)

export default Services
