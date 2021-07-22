import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import Nav from '../components/Nav'

export default function Contact() {
  return (
    <Layout>
      <div className="cover" id="contact">
      <Nav bg="white" mode="multiply" />
      <h3 id="h">Contact Us</h3>
        <ContactForm />
      </div>
      <style jsx>{`

      #h {
          margin-top: 0;
        padding-top: 30px;
      
        font-size: 24px;
        font-weight: 600;
        }
        .cover {
          position: relative;
          min-height: 600px;
       padding-bottom: 300px;
          background: rgb(251,251,189);
background: linear-gradient(90deg, rgba(251,251,189,1) 0%, rgba(251,251,189,0) 50%, rgba(251,251,189,1) 100%);

        }

        #contact {

        }
      `}</style>
    </Layout>
  )
}
