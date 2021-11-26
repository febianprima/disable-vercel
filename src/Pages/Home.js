import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
// import Voice from "../Components/Voice";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  CardGroup,
} from "react-bootstrap";
import styles from "../Css/Home.module.css";
import ReactPlayer from "react-player/youtube";
import { CImage } from "@coreui/react";


function Home() {
  return (
    <>
      <Header />
      {/* <Voice /> */}
      <div className={styles.warnaHero}>
        <Container>
          {/* Hero Section */}
          <Row>
            <Col md lg="4" className="mt-5">
              <p className={styles.textHero}>Disable Is Available</p>
              <p className={`mb-4 ${styles.textSlogan}`}>
                "Kenali saya karena kemampuan saya, bukan disabilitas saya."
              </p>
              <Link to="/register">
                <Button className="me-3" variant="success">
                  Sign Up
                </Button>
              </Link>
              <Button href="#videoMotivasi">Watch Video</Button>
            </Col>
            <Col md lg="8" className="mt-3">
              <Image className={styles.imgHero} src={process.env.PUBLIC_URL +"/Assets/ImageHero.png"} />
            </Col>
          </Row>

          {/* Features */}
          <CardGroup className="mt-5 mb-5">
            <Card
              className={`me-4 bg-transparent text-center ${styles.borderNone}`}
            >
              <div className="d-flex justify-content-center">
                <Card.Img
                  className={styles.imgFeature}
                  variant="top"
                  src={"/Assets/voice-recognition.png"}
                />
              </div>
              <Card.Body>
                <Card.Title>Voice input system</Card.Title>
              </Card.Body>
            </Card>
            <Card
              className={`me-4 bg-transparent text-center ${styles.borderNone}`}
            >
              <div className="d-flex justify-content-center">
                <Card.Img
                  className={styles.imgFeature}
                  variant="top"
                  src={"/Assets/hr-manager.png"}
                />
              </div>
              <Card.Body>
                <Card.Title>
                  Consulting your struggle with professional
                </Card.Title>
              </Card.Body>
            </Card>
            <Card
              className={`me-4 bg-transparent text-center ${styles.borderNone}`}
            >
              <div className="d-flex justify-content-center">
                <Card.Img
                  className={styles.imgFeature}
                  variant="top"
                  src={"/Assets/disabled-person.png"}
                />
              </div>
              <Card.Body>
                <Card.Title>Disability friendly platform</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>

          {/* Article */}
          <p className={`text-center mb-4 ${styles.quotes}`}>Article</p>
          <Row xs={1} md={2} className="mb-5 g-4">
            <Col>
              <Card>
                <Card.Img variant="top" src={"/Assets/michael-anthony.jpg"} />
                <Card.Body>
                  <Card.Title>Michael Anthony</Card.Title>
                  <Card.Text>
                    Michael Anthony sejak lahir tunanetra dan autis, namun pada
                    usia 8 tahun tanpa mengenal notasi musik dan tanpa tahu
                    siapa itu Ludwig van Beethoven dan tanpa bimbingan siapa pun
                    hanya berkat beberapa kali secara kebetulan atas kehendak
                    diri sendiri mendengar rekaman tiga mahasonata mahakarya
                    Ludwig van Beethoven sudah hafal luar kepala serta mampu
                    utuh mempergelarakan Sonata opus 13.
                  </Card.Text>
                  <Card.Link
                    href="https://www.industry.co.id/read/6764/michael-anthony-pianis-muda-tuna-netra-dan-autis-terima-penghargaan-muri"
                    target="_blank"
                  >
                    Read More ...
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={"/Assets/stephanie.jpg"} />
                <Card.Body>
                  <Card.Title>Stephanie Handojo</Card.Title>
                  <Card.Text>
                    Prestasi perempuan kelahiran Surabaya, Jawa Timur, ini,
                    bahkan bukan sekadar raihan di tingkat nasional, melainkan
                    Stephanie sudah mencatatkan namanya di kancah internasional.
                    Pada 2011, Stephanie menjadi peraih medali emas cabang
                    olahraga renang di ajang Special Olympics World Summer Games
                    di Athena, Yunani, untuk nomor 50 meter gaya dada. Ajang ini
                    adalah sebuah pesta olahraga bagi anak-anak berkebutuhan
                    khusus dari seluruh dunia.
                  </Card.Text>
                  <Card.Link
                    href="https://megapolitan.kompas.com/read/2016/02/14/09362021/Stephanie.Handojo.Penyandang.Down.Syndrome.Berprestasi.Dunia?page=all"
                    target="_blank"
                  >
                    Read More ...
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Video */}
        <p className={`text-center ${styles.quotes}`}>Video</p>
        <div className={`mb-5 ${styles.bgVideo}`}>
          <Row>
            <Col lg="2"></Col>
            <Col lg="8">
              <div className={styles.playerWrapper}>
                <ReactPlayer
                  controls
                  width="100%"
                  height="100%"
                  className={`mt-4 ${styles.reactPlayer}`}
                  id="videoMotivasi"
                  url="https://www.youtube.com/watch?v=aWI84egCqXM"
                />
              </div>
            </Col>
            <Col lg="2"></Col>
          </Row>
        </div>

        <Container>
          {/* Quotes */}
          <Row>
            <Col lg="2"></Col>
            <Col lg="8">
              <div className="mb-5 text-center">
                <p className={styles.quotes}>Quotes</p>
              </div>
              <div className="clearfix">
                <CImage
                  className="me-3"
                  align="start"
                  rounded
                  src={"/Assets/gusdur.jpg"}
                  width={200}
                  height={200}
                />
                <p>
                  "Memuliakan manusia berarti memuliakan penciptanya.
                  Merendahkan manusia berarti merendahkan dan menistakan
                  penciptanya."
                </p>
                <p className="mt-5">KH Abdurrahman Wahid</p>
              </div>
              <div className="clearfix mt-5">
                <CImage
                  className="me-3"
                  align="start"
                  rounded
                  src={"/Assets/nick.jpg"}
                  width={200}
                  height={200}
                />
                <p>
                  . "Saya secara resmi cacat, tetapi saya benar-benar diaktifkan
                  karena kekurangan anggota tubuh saya. Tantangan unik saya
                  telah membuka peluang untuk menjangkau begitu banyak orang
                  yang membutuhkan."
                </p>
                <p className="mt-5">Nick Vujicic</p>
              </div>
            </Col>
            <Col lg="2"></Col>
          </Row>
        </Container>

        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}

export default Home;
