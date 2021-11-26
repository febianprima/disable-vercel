import React, { useState } from "react";
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
  CFormFeedback,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilAt, cilLockLocked, cilUser } from "@coreui/icons";
import axios from "axios";
import Header from '../Components/Header';
import { useNavigate } from "react-router";
import Api from "../Utils/Api";
import styles from '../Css/Login.module.css';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [validated, setValidated] = useState(false)

  const handleSubmit = async (event) =>{
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }else{
    if(password !== repeatPass){
      console.log("Password tidak sama!");
    } else {
      await axios
        .post(Api.userRegister, { username, email, password })
        .then((res) => {
          const result = res.data;
          console.log(result);

          if(res.status === 201){
            localStorage.setItem("userData", JSON.stringify(result.data));
            const user = JSON.parse(localStorage.getItem('userData'));
            navigate(`/create/${user.id}`)
            event.preventDefault()
          }else{
            alert(result.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }
    setValidated(true)
  };

  return (
    <>
      <Header />
      <div className= {`${styles.page} min-vh-100 d-flex flex-row align-items-center`}>
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm
                    noValidate
                    validated={validated}
                  >
                    <h1>Register</h1>
                    <p className="text-medium-emphasis">Create your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText style={{backgroundColor: 'grey', borderColor:'green'}}>
                        <CIcon icon={cilUser} style={{width:'20px', color:'white'}} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        onChange={(e) => setUsername(e.target.value)}
                        style={{borderColor:'green'}}
                        required
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      <CFormFeedback invalid>Please choose an username.</CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText style={{backgroundColor: 'grey', borderColor:'green'}}>
                        <CIcon icon={cilAt} style={{width:'20px', color:'white'}} />
                      </CInputGroupText>
                      <CFormInput 
                        placeholder="Email" 
                        autoComplete="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        style={{borderColor:'green'}}
                        required
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      <CFormFeedback invalid>Please choose an email.</CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText style={{backgroundColor: 'grey', borderColor:'green'}}>
                        <CIcon icon={cilLockLocked} style={{width:'20px', color:'white'}} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        onChange={(e) => setPassword(e.target.value)}
                        style={{borderColor:'green'}}
                        required
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      <CFormFeedback invalid>Please set a password.</CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText style={{backgroundColor: 'grey', borderColor:'green'}}>
                        <CIcon icon={cilLockLocked} style={{width:'20px', color:'white'}} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Repeat password"
                        autoComplete="new-password"
                        onChange={(e) => setRepeatPass(e.target.value)}
                        style={{borderColor:'green'}}
                        required
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      <CFormFeedback invalid>Please repeat the password.</CFormFeedback>
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success" onClick={(event)=>handleSubmit(event)}>
                        Create Account
                      </CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default Register;
