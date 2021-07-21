import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <Layout>
      <div className="cover" id="contact">
      <h3 id="h">Contact Us</h3>
        <ContactForm />
      </div>
      <style jsx>{`

      #h {
          margin-top: 0;
        padding-top: 30px;
        padding-bottom: 20px;
        font-size: 24px;
        font-weight: 600;
        }
        .cover {
          position: relative;
          min-height: 600px;
          background:
          url(https://images.unsplash.com/photo-1518655048521-f130df041f66?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)
          no-repeat center center;
        background-size: cover;

        }

        #contact {

        }
      `}</style>
    </Layout>
  )
}
