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
                <img src={"https://www.linkpicture.com/q/bakery.jpg"} />
              </div>
            </div>

            <div>
              <div className="image">
                <img src={"https://www.linkpicture.com/q/farms.jpg"} />
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
            background: rgb(116, 213, 194);
          background: linear-gradient(
            70deg,
            rgba(116, 213, 194, 1) 0%,
            rgba(116, 213, 194, 0.804359243697479) 10%,
            rgba(116, 213, 194, 0.5970763305322129) 20%,
            rgba(116, 213, 194, 0.39539565826330536) 30%,
            rgba(116, 213, 194, 0.2049194677871149) 40%,
            rgba(116, 213, 194, 0.2049194677871149) 50%,
            rgba(116, 213, 194, 0.2049194677871149) 60%,
            rgba(116, 213, 194, 0.4009978991596639) 70%,
            rgba(116, 213, 194, 0.6026785714285714) 80%,
            rgba(116, 213, 194, 0.804359243697479) 90%,
            rgba(116, 213, 194, 1) 100%
          );

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
