import React from "react";
import "../Css/About.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Image } from "react-bootstrap";

function About() {
  return (
    <>
      <Header />

      <div style={{backgroundColor:'#34BE82'}}>
        <div
          className="
              overlay
              px-5
              d-flex
              flex-column
              justify-content-center
              align-items-center
            "
        >
          {/* <Container className="px-5"> */}
            <h1 className="pt-5 fw-bolder text-center mb-4">About Us</h1>
            <h2 className="text-center m-5 pb-5" style={{color: 'whitesmoke'}}>
              Disable merupakan sebuah proyek yang digagas pada tahun 2021. Disable, sesuai dengan slogannya 
              Disable is Available, menyediakan sebuah platform yang membantu mewujudkan pemberdayaan komunitas 
              disabilitas untuk dapat terjun ke lingkungan sosial dan profesional.
            </h2>
        </div>
      </div>
        <div className="mt-5 pt-3 d-flex justify-content-center title-margin">
          <h1 className="fw-bolder text-center">Meet Our Team</h1>
        </div>
        <main>
          <div className="d-flex justify-content-around">
              <div className="d-flex justify-content-center">
                  <div className="row align-items-center">
                      <div className="col-md-4 mt-4">
                          <Image className="img-side" src={"/Assets/ajie.jpg"} alt="" />
                          <div>
                              <p className="text-name">Ajie Darmawan</p>
                              <p className="text-role">Frontend Developer</p>
                          </div>
                      </div>
                      <div className="col-md-4 mt-4">
                          <img className="img-center" src={"/Assets/prima.jpg"} style={{width: '20vw'}} alt="" />
                          <div>
                              <p className="text-name">Ari Febiansyah Prima Nasution</p>
                              <p className="text-role">Frontend Developer</p>
                          </div>
                      </div>
                      <div className="col-md-4 mt-4">
                          <img className="img-side" src={"/Assets/renni.jpg"} style={{width: '20vw'}} alt="" />
                          <div>
                              <p className="text-name">Fransiska Renni</p>
                              <p className="text-role">Frontend Developer</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </main>
            
      <Footer />
    </>
  );
}

export default About;
