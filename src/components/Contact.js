import { useState } from "react";
import emailjs from "emailjs-com";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Perform any validation and data processing here if needed

    try {
      const templateParams = {
        from_name: formData.firstName + " " + formData.lastName,
        email: formData.email,
        message: formData.message,
      };

      // Replace 'YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', and 'YOUR_EMAILJS_USER_ID' with your actual values from EmailJS
      const response = await emailjs.send(
        "service_pd6fze9",
        "template_8rp9bsh",
        templateParams,
        "H4th8tqTIWXM81UU4"
      );

      console.log("Email sent successfully:", response);
      window.alert("Email sent successfully:")
      // Handle the success message here if needed.
    } catch (error) {
      console.error("Error sending email:", error);
      // Handle the error message here if needed.
   }
   setFormData({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));
};

  return (
    <section className="contact" id="connect">
      <Container>


        <Row className="align-items-center">


          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>


          <Col size={12} md={6}>
            <TrackVisibility>
            <form onSubmit={handleFormSubmit}>

       <Row>    
       <Col>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleInputChange}
        required
      /> 
    </Col>
    <Col>  
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleInputChange}
        required
      />
    </Col>   
      </Row>  

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <textarea
        rows="7"
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleInputChange}
        required
      ></textarea>
      <button type="submit">Send Message</button>
    </form>
            </TrackVisibility>


          </Col>
        </Row>
      </Container>
    </section>
  )
}
