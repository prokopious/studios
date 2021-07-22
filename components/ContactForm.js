export default function ContactForm() {
  return (
    <div>
      <form
        id="forms"
        name="contact"
        action="/success"
        data-netlify="true"
        method="POST"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          {/* <label htmlFor="yourname">Your Name:</label> <br /> */}
          <input
            className="paragraph"
            placeholder="Name"
            type="text"
            name="name"
            id="yourname"
          />
        </p>
        <p>
          {/* <label htmlFor="youremail">Your Email:</label> <br /> */}
          <input
            className="paragraph"
            placeholder="Email"
            type="email"
            name="email"
            id="youremail"
          />
        </p>
        <p>
          {/* <label htmlFor="yourmessage">Message:</label> <br /> */}
          <textarea
            className="paragraph2"
            placeholder="Message"
            name="message"
            id="yourmessage"
          ></textarea>
        </p>
        <p>
          <button type="submit" id="butt">
            Send
          </button>
        </p>
      </form>
      <style jsx>{`
        .paragraph {
          width: 300px;
          height: 35px;
          border-radius: 3px;
          border: transparent;
          box-shadow: -5px -5px 15px rgba(230, 230, 230, 0.267),
            5px 5px 12px rgba(63, 59, 1, 0.219);
          padding-left: 5px;
        }

        #butt {
          border-radius: 3px;
          background-color: rgb(255, 255, 255);
          padding: 3px 27px;
          border: transparent;

          box-shadow: -5px -5px 15px rgba(230, 230, 230, 0.267),
            5px 5px 12px rgba(63, 59, 1, 0.219);
          color: gray;
        }

        .paragraph2 {
          width: 300px;
          margin-top: 5px;
          height: 200px;
          border-radius: 3px;

          border: transparent;
          padding: 5px;
          box-shadow: -5px -5px 15px rgba(230, 230, 230, 0.267),
            5px 5px 12px rgba(63, 59, 1, 0.219);
        }
      `}</style>
    </div>
  )
}
