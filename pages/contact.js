import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import Nav from "../components/Nav"

export default function Contact() {
  return (
    <Layout>
      <div className="cover" id="contact">
        <Nav bg="white" color="#4e5052" mode="multiply" />
        <h3 id="h">Contact Us</h3>
        <ContactForm />
      </div>
      <style jsx>{`
        #h {
          margin-top: 0;
          padding-top: 30px;
          color: #4e5052;
          font-size: 24px;
          font-weight: 500;
        }
        .cover {
          position: relative;
          min-height: 600px;
          padding-bottom: 300px;
          background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);
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
