export default function ContactForm() {
  return (
    <div><form id="forms" name="contact" action="/success" data-netlify="true" method="POST">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        {/* <label htmlFor="yourname">Your Name:</label> <br /> */}
        <input className="paragraph" placeholder="Name" type="text" name="name" id="yourname" />
      </p>
      <p>
        {/* <label htmlFor="youremail">Your Email:</label> <br /> */}
        <input className="paragraph" placeholder="Email" type="email" name="email" id="youremail" />
      </p>
      <p>
        {/* <label htmlFor="yourmessage">Message:</label> <br /> */}
        <textarea className="paragraph2" placeholder="Message" name="message" id="yourmessage"></textarea>
      </p>
      <p>
        <button type="submit" id="butt">Send</button>
      </p>
    </form>
    <style jsx>{`
    .paragraph {
  width: 400px;
  height: 35px;
  border-radius: 3px;
  border: 1px solid #5e5e5e36;
  box-shadow: 0px 3px 5px #5e5e5e36;
  padding-left: 5px;
}

#butt {
  border-radius: 3px;
  background-color: rgb(255, 255, 255);
  padding: 3px 27px;
  border: 1px solid #5e5e5e36;
  box-shadow: 0px 3px 5px #5e5e5e36;
  color: gray;
}

.paragraph2 {
  width: 400px;
  margin-top: 5px;
  height: 200px;
  border-radius: 3px;
  border: #5e5e5e36;
 
  padding: 5px;
  border: 1px solid #5e5e5e36;
        box-shadow: 0px 3px 5px #5e5e5e36;
}
      
      
      `}</style></div>
  )
}
