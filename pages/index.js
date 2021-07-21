import Layout from "../components/Layout"

const Homepage = () => (
  <div className="cover">
    <Layout>
      <div id="other">
        <div id="boxy">
          <div id="design">Digital Storefront Design</div>
          <div id="email">703-635-9598</div>
          <div id="email">toddhuyett@gmail.com</div>{" "}
        </div>
      </div>
    </Layout>
    <style jsx>{`
      #design {
        font-size: calc(30px);
        font-weight: 600;
        color: rgb(0, 0, 0);
      }

      #email {
        font-size: 20px;
        font-weight: 600;
      }

      #boxy {
        padding-top: calc(2em + 0.7vw);
        padding-bottom: calc(2em + 0.7vw);
        padding-right: calc(0em + 0.7vw);
        padding-left: calc(0em + 0.7vw);
      
   
        background-color: $navbar-background-color;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.644);
        border-radius: 3px;
        max-width: 500px;
      }
      .cover {
        position: relative;
        min-height: 600px;
        mix-blend-mode: darken;
        background: url("../static/st.jpg") no-repeat center center;
        background-size: cover;
      }

      #other {
        padding-top: 3vw;
        padding-bottom: 0;
        padding-right: 45vw;
        padding-left: 3vw;
      }

      @media (max-width: 900px) {
        #design {
          font-size: calc(25px);
          font-weight: 600;
          color: black;
        }
        #boxy {
          padding-top: calc(2em + 0.7vw);
          padding-bottom: calc(2em + 0.7vw);
          padding-right: calc(.75em + 0.7vw);
          padding-left: calc(.75em + 0.7vw);

      
       
          background-color: $navbar-background-color;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.644);
          border-radius: 3px;
        }
        #other {
        padding-top: 5vw;
        padding-bottom: 0;
        padding-right: 7vw;
        padding-left: 7vw;
      }


      }

      @media (max-width: 600px) {
        #design {
          font-size: calc(16px + 1vw);
          font-weight: 600;
          color: black;
        }

        #boxy {
          padding-right: calc(.5em + 0.7vw);
          padding-left: calc(.5em + 0.7vw);
          padding-top: calc(2em + 0.7vw);
          padding-bottom: calc(2em + 0.7vw);
          background-color: $navbar-background-color;
          box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.644);
          border-radius: 3px;
        }
      }
    `}</style>
  </div>
)

export default Homepage
