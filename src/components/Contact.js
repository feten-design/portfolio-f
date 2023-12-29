import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isUnderDevelopment, setIsUnderDevelopment] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const requestData = {
      name: name,
      email: email,
      message: message,
      subject: subject
    };

    try {
      // const response = await axios.post('192.168.43.86:8000/send-mail', requestData);
      const response = await axios.post('https://server-bay-five.vercel.app/send-mail-faten?fbclid=IwAR20sTwlsIWwZEeyUUeqnl6A1TrGFY7GV6w9_jU7itLAA3yvf6c9ntk7jyk', requestData);
      if (response.status === 200) {
        setShowSuccessMessage(true);
        setIsSubmitting(false);
      } else {
        setErrorMessage("Error sending message. Please try again.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage("Error sending message. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <div className="row mt-1">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Jendouba, Tunisia</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>selmifeten9@gmail.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+216 92 462 170</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
          <form role="form" className="php-email-form" onSubmit={handleSubmit}>
  {!showSuccessMessage && (
    <div>
      <div className="row">
        <div className="col-md-6 form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          name="subject"
          id="subject"
          placeholder="Subject"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div className="form-group mt-3">
        <textarea
          className="form-control"
          name="message"
          rows="5"
          placeholder="Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <div className="text-center">
  <button type="submit" className="btn btn-primary" disabled={false}>
    {isSubmitting ? "Sending..." : "Send Message"}
  </button>
</div>


      {/* <div className="my-3"></div>
<div className="text-center">
  <button type="submit" disabled={false}>
    {isSubmitting ? "Sending..." : "Send Message"}
  </button> */}
  {/* {isUnderDevelopment && (
    <p style={{ color: "red" }}>This form is currently under development. Sorry for the inconvenience.</p>
  )} */}
{/* </div> */}

    </div>
  )}
  {showSuccessMessage && (
    <Alert variant="success" className="mx-auto mt-2 text-center">
      <strong>Your message has been successfully sent. Thank you for reaching out to me! If you have any urgent inquiries, feel free to call me at +216 92462170</strong>
    </Alert>
  )}
</form>

          </div>
        </div>
      </div>
    </section>
  );
};
           
export default Contact;
