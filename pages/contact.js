import ContactForm from "../components/ContactForm"
import Layout from "../components/Layout"
import Nav from "../components/Nav"

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
          color: rgb(47, 47, 47);
          font-size: 24px;
          font-weight: 600;
        }
        .cover {
          position: relative;
          min-height: 600px;
          padding-bottom: 300px;
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
