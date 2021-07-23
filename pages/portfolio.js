import Layout from "../components/Layout"
import Nav from "../components/Nav"

const Portfolio = () => {
  return (
    <>
      <Layout>
        <div id="cover">
          <Nav mode="multiply" bg="white" color="black" />
          <h3 id="h">Portfolio</h3>
          <div className="gallery">
            <div>
              {" "}
              <div className="image">
                <a href="https://determined-leakey-9c05aa.netlify.app/">
                  <img src={"https://www.linkpicture.com/q/bakery.jpg"} />
                </a>
              </div>
            </div>

            <div>
              <div className="image">
                <a href="https://hopeful-chandrasekhar-9e044a.netlify.app/">
                  <img src={"https://www.linkpicture.com/q/farms.jpg"} />
                </a>
              </div>
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
            padding-bottom: 200px;
          }

          #cover {
            position: relative;
            background-color: #8ec5fc;
            background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);

            background-size: cover;
          }
          img {
            border-radius: 5px;
          }
          .image {
            border-radius: 5px;
            box-shadow: -5px -5px 15px rgba(230, 230, 230, 0.267),
              5px 5px 12px rgba(0, 0, 0, 0.336);

            background-color: rgba(255, 255, 255, 0.164);
          }
          .label {
            font-size: 16px;
            text-transform: uppercase;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.774);
          }
          #h {
            margin-top: 0;
            padding-top: 30px;
            padding-bottom: 0;
            font-size: 24px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.664);
          }

          @media (max-width: 700px) {
            #h {
              font-size: 20px;
              color: rgb(47, 47, 47);
            }
            .gallery {
              grid-template-columns: 1fr;
              grid-gap: 15px;
              margin-bottom: 200px;
              max-width: 900px;
              margin: 0 auto;
              padding-bottom: 300px;
              padding-left: 10px;
              padding-right: 10px;
              padding-top: 0px;
              padding-bottom: 20px;
            }
            .label {
              font-size: 15px;
              text-transform: uppercase;
              font-weight: 500;
              color: rgb(0, 0, 0);
              padding-top: 10px;
            }
          }
        `}</style>
      </Layout>
    </>
  )
}

export default Portfolio
