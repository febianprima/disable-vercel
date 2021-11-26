import React from "react";
import styles from "../Css/Footer.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={`mt-5 ${styles.warnaBg} d-flex flex-column`}>
      <Container>
        <Row>
          <Col>
            <Row className='ps-4 ms-2'>
              <Link to="/">
                <Image className={`mt-5 ${styles.logoImage}`} src={"/Assets/logo.png"} />
              </Link>
            </Row>
            <Row className='ms-5'>
              <Col>
                <Link to="/">
                  <Image className={styles.icImage} src={"/Assets/ic_fb.png"} />
                </Link>
                <Link to="/">
                  <Image
                    className={styles.icImage}
                    src={"/Assets/ic_twitter.png"}
                  />
                </Link>
                <Link to="/">
                  <Image className={styles.icImage} src={"/Assets/ic_ig.png"} />
                </Link>
                <Link to="/">
                  <Image
                    className={styles.icImage}
                    src={"/Assets/ic_linkedin.png"}
                  />
                </Link>
              </Col>
            </Row>
          </Col>
          <Col>
            <p className="mt-5 text-white">Get Started</p>
            <div className="d-flex flex-column">
              <Link style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
              <Link style={{ textDecoration: "none" }} to="/about">
                About Us
              </Link>
              <Link style={{ textDecoration: "none" }} to="/contact">
                Contact
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
