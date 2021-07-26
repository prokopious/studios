import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import Nav from "../components/Nav"
import ClientOnly from "../components/ClientOnly"
import Contact from "../components/Contact"

export default function contact() {
  return (
    <Layout>
      <div className="cover" id="contact">
        <Nav bg="transparent" color="#535353" mode="normal" />
        <h3 id="h">Contact Us</h3>
        <div id="thebox">
          <ClientOnly>
            <Contact />
          </ClientOnly>
        </div>
      </div>
      <style jsx>{`
        #h {
          margin-top: 0;
          padding-top: 30px;
          color: #535353;
          font-size: 24px;
          font-weight: 500;
        }
        .cover {
          position: relative;
          min-height: 100vh;
          background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
        }
        #thebox {
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        #contact {
        }

        @media (max-width: 600px) {
          #h {
            font-size: 20px;
          }
        }
      `}</style>
    </Layout>
  )
}
