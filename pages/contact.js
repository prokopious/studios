import { useState } from "react"
import axios from "axios"
import Layout from "../components/Layout"
import Nav from "../components/Nav"
import Router from "next/router"
import { NextSeo } from "next-seo"

function App() {
  const [id, setId] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState(null)



  const handleSubmit = () => {
    setLoading(true)
    setIsError(false)
    const details = {
      id: id,
      email: email,
      message: message,
    }
    const formBody = JSON.stringify(details);
    console.log(formBody)
    axios
      .post(
        "https://hz2legl1t5.execute-api.us-east-1.amazonaws.com/prod/messages",
        formBody
      )
      .then(res => {
        setData(res.data)
        setId("")
        setEmail("")
        setMessage("")
        setLoading(false)
      })
      .then(Router.push("/success"))
      .catch(err => {
        setLoading(false)
        setIsError(true)
      })
  }

  return (
    <>
      {" "}
      <NextSeo
        title="Contact | Hanover Web Studios"
        description="For web and e-commerce design consultations we welcome small RVA businesses and vendors to contact us."
        additionalLinkTags={[
          {
            rel: "icon",
            href: "../static/images/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "/images/apple-touch-icon.png",
            sizes: "180x180",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "../static/images/favicon-32x32.png",
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "../static/images/favicon-32x32.png",
          },
          {
            rel: "manifest",
            href: "/manifest.json",
          },
        ]}
      />
      <Layout>
        <div id="cover">
          <Nav bg="transparent" color="#3A3A3A" mode="normal" />

          <h5 id="h">Contact Us</h5>

          <div classNames="form-group">
            <input
              type="text"
              className="form-control"
              id="id"
              className="paragraph"
              placeholder="Name.."
              value={id}
              onChange={e => setId(e.target.value)}
            />
          </div>
          <div classNames="form-group">
            <input
              type="text"
              className="form-control"
              className="paragraph"
              id="email"
              placeholder="Email.."
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div classNames="form-group">
            <textarea
              type="text"
              className="form-control"
              id="message"
              className="paragraph2"
              placeholder="Message.."
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          {isError && (
            <small className="mt-3 d-inline-block text-danger">
              Something went wrong. Please try again later.
            </small>
          )}
          <button
            id="buttt"
            type="submit"
            className="btn btn-primary mt-3"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </div>
        <style jsx>
          {`
            #h {
              margin-top: 0;
              padding-top: 30px;
              padding-bottom: 30px;
              color: #3a3a3a;
              font-size: 24px;
              font-weight: 500;
            }
            .paragraph {
              width: 300px;
              margin-bottom: 5px;
              height: 35px;
              border-radius: 3px;
              border: transparent;
              box-shadow: -5px -5px 15px rgba(119, 119, 119, 0.041),
                5px 5px 12px rgba(49, 49, 49, 0.164);
              padding-left: 5px;
            }

            #buttt {
              border-radius: 3px;
              background-color: rgb(255, 255, 255);
              padding: 3px 27px;
              border: transparent;
              color: #3a3a3a;
              box-shadow: -5px -5px 15px rgba(119, 119, 119, 0.041),
                5px 5px 12px rgba(49, 49, 49, 0.164);
            }

            .paragraph2 {
              width: 300px;
              margin-top: 2px;
              height: 200px;
              border-radius: 3px;
              color: #3a3a3a;
              border: transparent;
              padding: 5px;
              box-shadow: -5px -5px 15px rgba(119, 119, 119, 0.041),
                5px 5px 12px rgba(49, 49, 49, 0.164);
            }
          `}
        </style>
      </Layout>
    </>
  )
}

export default App
