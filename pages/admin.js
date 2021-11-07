import axios from "axios"
import React from "react"
import { NextSeo } from "next-seo"
import Layout from "../components/Layout"
import Nav from "../components/Nav"
import { useState, useEffect } from "react"

const baseURL =
  "https://hz2legl1t5.execute-api.us-east-1.amazonaws.com/prod/messages"

export default function App() {
  const [emails, setEmails] = useState(null)

  useEffect(() => {
    axios
      .get(baseURL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        crossDomain: true,
      })
      .then(response => {
        setEmails(response.data.body.Items)
      })
  }, [])

  let messages = []
  messages.push(emails)
  if (!emails) {
    return (
      <>
        <Layout>
          <div id="cover">
            <Nav bg="transparent" color="#535353" mode="normal" />
            <div id="h">Messages</div>
            <div>You have no messages.</div>
          </div>
        </Layout>
      </>
    )
  } else {
    return (
      <>
        <Layout>
          <div id="cover">
            <Nav bg="transparent" color="#535353" mode="normal" />
            <div id="h">Messages</div>
            <div id="emailbox">
              {emails.map(message => (
                <>
                  <div>
                    <div>{message.id.S} </div>
                    <div>{message.email.S} </div>
                    <div>{message.message.S} </div>
                  </div>

                  <hr></hr>
                </>
              ))}
            </div>
          </div>
          <style jsx>{`
            #emailbox {
            }
            #h {
              margin-top: 0;
              padding-top: 30px;
              padding-bottom: 30px;
              color: #535353;
              font-size: 24px;
              font-weight: 500;
            }
          `}</style>
        </Layout>
      </>
    )
  }
}
