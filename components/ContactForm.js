export default function ContactForm() {
  return (
    <form id="forms" name="contact" action="/success" data-netlify="true" method="POST">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        {/* <label htmlFor="yourname">Your Name:</label> <br /> */}
        <input className="paragraph" placeholder="Name.." type="text" name="name" id="yourname" />
      </p>
      <p>
        {/* <label htmlFor="youremail">Your Email:</label> <br /> */}
        <input className="paragraph" placeholder="Email.." type="email" name="email" id="youremail" />
      </p>
      <p>
        {/* <label htmlFor="yourmessage">Message:</label> <br /> */}
        <textarea className="paragraph2" placeholder="Message.." name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button type="submit" id="butt">Send</button>
      </p>
    </form>
  )
}
