import React from "react";
import styles from "../Css/Contact.module.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Header />

      <Container style={{ marginBottom: "100px" }}>
        <p
          id="get-in"
          className="fs-1 fw-bold mt-5 mb-5 d-flex justify-content-center"
        >
          <span className={`${styles.garisSpan}`}></span>Our Contact
          <span className={`${styles.garisSpan}`}></span>
        </p>

        <Row className="align-items-start">
          <Col></Col>
          <Col>
            <div className="mb-3">
              <span>Phone</span>
              <br></br>
              <Image
                className={`m-2 ${styles.socialProfile}`}
                src={"/assets/phone.png"}
                alt="phone"
              />
              <span>+62 8952 2767 180</span>
            </div>
            <div className="mb-3">
              <span>Email</span>
              <br></br>
              <Image
                className={`m-2 ${styles.socialProfile}`}
                src={"/assets/envelope.png"}
                alt="email"
              />
              <span>info@disable.id</span>
            </div>
            <div className="mb-3">
              <span>Website</span>
              <br></br>
              <Image
                className={`m-2 ${styles.socialProfile}`}
                src={"/assets/browser.png"}
                alt="website"
              />
              <span>https://www.disableIsAvailable.id/</span>
            </div>

            <span>Social Profile</span>
            <div className="mb-5">
              <Image
                className={`m-1 ${styles.socialProfile}`}
                src={"/assets/facebook.png"}
                alt="facebook"
              />
              <Image
                className={`m-1 ${styles.socialProfile}`}
                src={"/assets/twitter.png"}
                alt="twitter"
              />
              <Image
                className={`m-1 ${styles.socialProfile}`}
                src={"/assets/instagram.png"}
                alt="instagram"
              />
              <Image
                className={`m-1 ${styles.socialProfile}`}
                src={"/assets/linkedin.png"}
                alt="linkedin"
              />
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Contact;
