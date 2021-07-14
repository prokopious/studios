import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"

export default function Contact() {
  return (
    <Layout>
      <div className="cover" id="contact">
        <ContactForm />
      </div>
      <style jsx>{`
        .cover {
          position: relative;
          min-height: 600px;
          background: transparent url(https://www.linkpicture.com/q/office2.jpg)
            no-repeat center center;
          background-size: cover;
        }

        #contact {
          padding-top: 50px;
        }
      `}</style>
    </Layout>
  )
}
