import Layout from "../components/Layout"

const Portfolio = () => {
  return (
    <Layout>
      <div id="cover">
        <h3 id="h">Portfolio</h3>
        <div className="gallery">
          <div className="square">
            <div className="image">
              <img src={"https://www.linkpicture.com/q/bakery.jpg"} />
            </div>
            <div className="label">Hanover Bakery</div>
          </div>
          <div className="square">
            <div className="image">
              <img src={"https://www.linkpicture.com/q/farms.jpg"} />
            </div>
            <div className="label">Hanover Farms</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 30px;
          margin-bottom: 50px;
          max-width: 900px;
          margin: 0 auto;
        }

        #cover {
          position: relative;
          min-height: 600px;
          background: url(https://images.unsplash.com/photo-1486246772917-8947d0f7f541?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80)
            no-repeat center center;
          background-size: cover;
        }

        img {
          border-radius: 4px;
        }
        .label {
          font-size: 15px;
          text-transform: uppercase;
          font-weight: 500;
          color: rgb(93, 93, 93);
          padding-top: 15px;
        }
        #h {
          margin-top: 0;
          padding-top: 30px;
          padding-bottom: 20px;
          font-size: 24px;
          font-weight: 600;
        }
        .square {
          border-radius: 4px;
          box-shadow: -5px -5px 8px rgba(255, 193, 193, 0),
            5px 5px 5px rgba(0, 0, 0, 0.308);
          padding: 30px;
          padding-bottom: 20px;
          background-color: rgb(255, 255, 255);
        }
        @media (max-width: 600px) {
          .gallery .image {
            width: auto;
            padding: 10px 20px;
          }
          .gallery {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 15px;
          margin-bottom: 200px;
          max-width: 900px;
          margin: 0 auto;
          padding-bottom: 100px;
      
        }
        .square {
          border-radius: 4px;
          box-shadow: -5px -5px 8px rgba(255, 193, 193, 0),
            5px 5px 5px rgba(0, 0, 0, 0.308);
          padding: 20px;
          margin: 5px;
          padding-bottom: 20px;
          background-color: rgb(255, 255, 255);
        }
        }
      `}</style>
    </Layout>
  )
}

export default Portfolio
