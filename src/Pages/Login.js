import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CImage,
  CFormFeedback,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import Header from "../Components/Header";
import axios from "axios";
import Api from "../Utils/Api";
import styles from "../Css/Login.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (!password) {
        console.log("Password yang Anda masukkan salah!");
        event.preventDefault();
      } else {
        await axios
          .post(Api.userLogin, { username, password })
          .then((res) => {
            const result = res.data;
            console.log(result);
            if (res.status === 200) {
              localStorage.setItem("userData", JSON.stringify(result.data));
              const user = JSON.parse(localStorage.getItem("userData"));
              navigate(`/feed/${user.id}`);
              event.preventDefault();
            } else {
              alert(result.message);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    setValidated(true);
  };

  return (
    <>
      <Header />
      <div
        className={`${styles.page} min-vh-100 d-flex flex-row`}
        style={{ textAlign: "center" }}
      >
        <CContainer>
          <CRow>
            <CCol sm={6} className="mt-5">
              <CRow>
                <h1
                  className="mb-4"
                  style={{ color: "white", fontWeight: "bolder" }}
                >
                  Selamat Datang!
                </h1>
              </CRow>
              <CRow>
                <CImage
                  className="mt-4 center"
                  align="center"
                  style={{ width: "80vw" }}
                  src={"/Assets/welcome.png"}
                />
              </CRow>
            </CCol>

            <CCol sm={6} className="justify-content-center mt-2">
              <CCard className={`p-4 ${styles.login}`}>
                <CCardBody>
                  <CForm noValidate validated={validated}>
                    <h2 className="text-medium-emphasis mb-3">
                      Masuk ke akun Anda!
                    </h2>
                    <CInputGroup className="mb-3">
                      <CInputGroupText
                        style={{
                          backgroundColor: "grey",
                          borderColor: "green",
                        }}
                      >
                        <CIcon
                          content={freeSet.cilUser}
                          style={{ width: "20px", color: "white" }}
                        />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username / Email"
                        autoComplete="username"
                        onChange={(e) => setUserName(e.target.value)}
                        style={{ borderColor: "green" }}
                        required
                      />
                      <CFormFeedback valid>Data sudah diisi</CFormFeedback>
                      <CFormFeedback invalid>
                        Mohon masukkan email Anda!
                      </CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText
                        style={{
                          backgroundColor: "grey",
                          borderColor: "green",
                        }}
                      >
                        <CIcon
                          icon={freeSet.cilLockLocked}
                          style={{ width: "20px", color: "white" }}
                        />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ borderColor: "green" }}
                        required
                      />
                      <CFormFeedback valid>Data sudah diisi</CFormFeedback>
                      <CFormFeedback invalid>
                        Password yang Anda masukkan salah!
                      </CFormFeedback>
                    </CInputGroup>
                    <CRow>
                      <CCol xs={12} className="d-flex justify-content-end">
                        <CButton
                          color="success"
                          className={`px-4 ${styles.loginButton}`}
                          onClick={(event) => handleSubmit(event)}
                        >
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                  <div>
                    <CImage
                      className="center mt-3 mb-3"
                      style={{ width: "375px", height: "5px" }}
                      src={"/Assets/divider.png"}
                    />
                    <p>Belum punya akun?</p>
                    <Link to="/register">
                      <CButton color="success" active tabIndex={-1}>
                        Daftar sekarang
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default Login;
