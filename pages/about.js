import Layout from "../components/Layout"

const About = () => (
  <Layout title="About">
    <div className="cover">
      <div id="about">
        <h3 id="h">Our Company</h3>
        <div className="about-text">
          <p>
          Garam masala can be made from many different spices, but some of the most common are cinnamon, peppercorns, cardamom, mustard seeds, coriander seeds, cloves, mace, and nutmeg. Garam masala can be made from many different spices, but some of the most common are cinnamon, peppercorns, cardamom, mustard seeds, coriander seeds, cloves, mace, and nutmeg.
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
        background-color: #ffffff;
        text-align: center;
        overflow: hidden;
        position: relative;
        border-radius: 3px;
        box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.233),
          5px 5px 5px rgba(0, 0, 0, 0.116);
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
        background: url(https://images.unsplash.com/photo-1573641287741-f6e223d81a0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80) no-repeat
          center center;
        background-size: cover;
        background-color: black;
      }

      #about {
        margin-top: 0px;
      }

      #h {
        margin-top: 0;
        padding-top: 30px;
        padding-bottom: 20px;
        font-size: 24px;
        font-weight: 600;
        color: rgb(53, 53, 53);
        text-shadow: 0px 2px 0px rgb(255, 255, 255);
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
        background-color: white;
        padding: 50px;
        border-radius: 3px;
        box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.233),
          5px 5px 5px rgba(0, 0, 0, 0.116);

      }
      img {
        float: right;
        margin: 10px 0 20px 20px;
        width: 100x;
      }
      @media (max-width: 600px) {
        .about-text img {
          float: none;
          display: block;
          margin: 0 auto 30px;
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
