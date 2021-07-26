import React, { useState } from "react"
import { useMutation, gql } from "@apollo/client"
import Router from "next/router"

const EMAIL = gql`
  mutation PostMutation(
    $content: String!
    $subject: String!
    $author: String!
    $id: String!
  ) {
    createPost(
      input: { content: $content, author: $author, subject: $subject, id: $id }
    ) {
      id
    }
  }
`

const CreateEmail = () => {
  const [formState, setFormState] = useState({
    id: "",
    content: "",
    author: "",
    subject: "",
  })
  const [createEmail] = useMutation(EMAIL, {
    variables: {
      id: formState.id,
      author: formState.author,
      content: formState.content,
      subject: formState.subject,
    },
  })

  return (
    <div>
      <div>
        <form
          onSubmit={e => {
            e.preventDefault()
            createEmail().then(Router.push("/success"))
          }}
        >
          <div>
            <div>
              <input
                className="paragraph"
                value={formState.id}
                onChange={e =>
                  setFormState({
                    ...formState,
                    id: e.target.value,
                  })
                }
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                className="paragraph"
                value={formState.author}
                onChange={e =>
                  setFormState({
                    ...formState,
                    author: e.target.value,
                  })
                }
                type="text"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="paragraph"
                value={formState.subject}
                onChange={e =>
                  setFormState({
                    ...formState,
                    subject: e.target.value,
                  })
                }
                type="text"
                placeholder="Subject"
              />
            </div>
            <div>
              <textarea
                className="paragraph2"
                value={formState.content}
                onChange={e =>
                  setFormState({
                    ...formState,
                    content: e.target.value,
                  })
                }
                type="textarea"
                placeholder="Message"
              />
            </div>
            <div>
              {" "}
              <button id="buttt">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <style jsx>
        {`
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

            box-shadow: -5px -5px 15px rgba(119, 119, 119, 0.041),
              5px 5px 12px rgba(49, 49, 49, 0.164);
            color: gray;
          }

          .paragraph2 {
            width: 300px;
            margin-top: 2px;
            height: 200px;
            border-radius: 3px;

            border: transparent;
            padding: 5px;
            box-shadow: -5px -5px 15px rgba(119, 119, 119, 0.041),
              5px 5px 12px rgba(49, 49, 49, 0.164);
          }

          @media screen and (max-width: 600px) {
          }
        `}
      </style>
    </div>
  )
}

export default CreateEmail
