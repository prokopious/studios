import Layout from "../components/Layout"
import Nav from "../components/Nav"

const About = () => (
  <Layout title="About">
    <div className="cover">
      <Nav bg="white" mode="multiply" />
      <div id="about">
        <h3 id="h">Our Company</h3>
        <div className="about-text">
          <p>
           
          </p>
        </div>{" "}
        <h3 id="h">Our Team</h3>
        <div className="cont">
          <div className="row">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="/static/todd.jpg" />
              </div>
              <div className="team-content">
                <h3 className="name">Todd Huyett</h3>
                <h4 className="title">Web Developer</h4>
              </div>
            </div>
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src="/static/em4.jpg" />
              </div>
              <div className="team-content">
                <h3 className="name">Emily Huyett</h3>
                <h4 className="title">Web Designer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .company-info {
        margin: 0;
        padding: 0;
        list-style: none;
        font-size: 18px;
      }

      .our-team {
        padding: 50px 40px;
        margin-bottom: 30px;

        mix-blend-mode: hard soft-light;
        background-color: #ffffff00;
        text-align: center;
        overflow: hidden;
        position: relative;
        border-radius: 4px;
        box-shadow: -5px -5px 15px rgba(119, 119, 119, 0.041),
          5px 5px 12px rgba(49, 49, 49, 0.164);
      }

      .our-team .picture {
        display: inline-block;
        height: 130px;
        width: 130px;
        margin-bottom: 20px;
        z-index: 1;

        position: relative;
      }

      .our-team .picture img {
        width: 100%;
        height: auto;
        border-radius: 50%;
        transform: scale(1);
        transition: all 0.9s ease 0s;
      }
      .our-team .title {
        display: block;
        font-size: 16px;
        color: #4e5052;
        text-transform: capitalize;
      }
      .row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
        margin-top: 0;
        grid-gap: 20px;
        max-width: 800px;
      }
      .name {
        margin-bottom: 5px;
        font-size: 22px;
      }
      .cover {
        position: relative;
        min-height: 600px;
        background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);

      }

      #about {
        margin-top: 0px;
      }

      #h {
        margin-top: 0;
        padding-top: 30px;

        font-size: 24px;
        font-weight: 600;
        color: rgb(47, 47, 47);
      }
      .company {
        font-weight: 700;
        font-size: 24px;
      }

      p {
        font-size: 18px;
      }
      .about-text {
        color: #777;
        text-align: left;
       
        max-width: 800px;
        margin: 0 auto 0px;
        font-size: 15px;
        background-color: rgba(255, 255, 255, 0);
        padding: 50px;
        border-radius: 4px;
        box-shadow: -5px -5px 15px rgba(119, 119, 119, 0.041),
          5px 5px 12px rgba(49, 49, 49, 0.164);

      }
      img {
        float: right;
        margin: 10px 0 20px 20px;
        width: 100x;
        mix-blend-mode: normal;
      }
      @media (max-width: 600px) {
        .about-text img {
          float: none;
          display: block;
          margin: 0 auto 30px;
        }
.about-text {
  padding: 10px;
  text-align: justify;
}
        #h {
          padding-top: 25px;
          padding-bottom: 0px;
          font-size: 20px;
        }
        .row {
          display: grid;
          grid-template-columns: 1fr;
          margin-right: 30px;
          margin-left: 30px;

          grid-gap: 20px;
        }
        p {
          font-size: 16px;
          margin: 15px;
        }
      }
    `}</style>
  </Layout>
)

export default About
