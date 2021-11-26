import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  CFormSelect,
  CFormLabel,
  CFormText,
  CFormFeedback
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import axios from "axios";
import Api from "../Utils/Api";

React.icons = { ...freeSet };

const Create = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");
  const [biography, setBiography] = useState("");
  const [birthday, setBirthday] = useState("");
  const [firstInterest, setFirstInterest] = useState("");
  const [secondInterest, setSecondInterest] = useState("");
  const [thirdInterest, setThirdInterest] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }else{
      const user = JSON.parse(localStorage.getItem('userData'))

      await axios
        .post(Api.createProfile, {
          userID: user.id,
          firstName, 
          lastName,
          status,
          biography,
          birthday,
          firstInterest,
          secondInterest,
          thirdInterest
        })
        .then((res) => {
          const result = res.data;
          console.log(result);

          if(res.status === 201){
            navigate(`/feed/${user.id}`);
            event.preventDefault();
          }else{
            alert(result.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }
      setValidated(true);
  };

  return (
    <>
    {/* <HeaderFeed /> */}
    <div className="min-vh-100 d-flex flex-row align-items-center" style={{backgroundColor:'seagreen'}}>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm
                  noValidate
                  validated={validated}
                >
                  <h1 className='mb-3'>Beritahu kami tentang Anda</h1>
                  <div className="mb-3">
                    <CFormLabel htmlFor='firstname'>Nama Depan</CFormLabel>
                    <CInputGroup>
                    <CInputGroupText style={{backgroundColor: 'grey', borderColor:'green'}}>
                        <CIcon icon={freeSet.cilUser} style={{width:'20px', color:'white'}} />
                    </CInputGroupText>
                    <CFormInput
                      id='firstname'
                      placeholder="Nama Depan"
                      autoComplete="firstName"
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      style={{borderColor:'green'}}
                    />
                    <CFormFeedback valid>Data sudah diisi.</CFormFeedback>
                    <CFormFeedback invalid>Mohon isi data diri Anda!</CFormFeedback>
                    </CInputGroup>
                  </div>
                  <div className="mb-3">
                    <CFormLabel htmlFor='lastname'>Nama Belakang</CFormLabel>
                    <CInputGroup>
                    <CInputGroupText style={{backgroundColor: 'grey', borderColor:'green'}}>
                        <CIcon icon={freeSet.cilUser} style={{width:'20px', color:'white'}} />
                    </CInputGroupText>
                    <CFormInput
                      id='lastname' 
                      placeholder="Nama Belakang" 
                      autoComplete="lastName" 
                      onChange={(e) => setLastName(e.target.value)}
                      style={{borderColor:'green'}}
                    />
                    </CInputGroup>
                  </div>
                  <div className="mb-3">
                    <CFormLabel>Status</CFormLabel>
                    <CInputGroup>
                    <CInputGroupText style={{backgroundColor:'grey' ,borderColor:'green'}}>
                      <CIcon icon={freeSet.cilAirplay} style={{width:'20px', color:'white'}} />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Status"
                      autoComplete="status"
                      onChange={(e) => setStatus(e.target.value)}
                      style={{borderColor:'green'}}
                    />
                    </CInputGroup>
                  </div>
                  <div className="mb-4">
                    <CFormLabel>Biografi</CFormLabel>
                    <CInputGroup>
                    <CInputGroupText style={{backgroundColor:'grey' ,borderColor:'green'}}>
                      <CIcon icon={freeSet.cilAlbum} style={{width:'20px', color:'white'}} />
                    </CInputGroupText>
                    <CFormInput
                      type='text'
                      placeholder="Biografi"
                      autoComplete="biography"
                      onChange={(e) => setBiography(e.target.value)}
                      style={{borderColor:'green'}}
                    />
                    </CInputGroup>
                  </div>
                  <div className="mb-4">
                    <CFormLabel>Tanggal Lahir</CFormLabel>
                    <CInputGroup>
                    <CInputGroupText style={{backgroundColor: 'grey', borderColor:'green'}}>
                      <CIcon icon={freeSet.cilCalendar} style={{width:'20px', color:'white'}} />
                    </CInputGroupText>
                    <CFormInput
                      type='date'
                      autoComplete="birthday"
                      onChange={(e) => setBirthday(e.target.value)}
                      style={{borderColor:'green'}}
                    />
                    </CInputGroup>
                  </div>
                  <div className="mb-4">
                    <CFormLabel>Hal yang diminati</CFormLabel>
                    <CFormText id='interest'>Pilih hal yang Anda minati</CFormText>
                    <CInputGroup aria-describedby='interest'>
                    <CInputGroupText style={{backgroundColor: 'grey', borderColor:'green'}}>
                      <CIcon icon={freeSet.cilLockLocked} />
                    </CInputGroupText>
                    <CFormSelect
                      autoComplete="firstInterest"
                      onChange={(e) => setFirstInterest(e.target.value)}
                      required
                    >
                      <option>Pilih salah satu peminatan</option>
                      <option value='Edukasi'>Edukasi (Pengajar, Studi di Perguruan Tinggi)</option>
                      <option value='Telekomunikasi'>Telekomunikasi (Progammer Komputer, Analist Sistem Komputer, Arsitek Database, Administrator Sistem Jaringan dan Komputer)</option>
                      <option value='IT'>Informatika (Web Developer, Software Engineer, Game Developer)</option>
                      <option value='Komunikasi'>Komunikasi (Administrator, Customer Service, Marketing, Jurnalis, Influencer)</option>
                      <option value='Wirausaha'>Wirausaha (Food and Beverage, Produsen Kreatif, Distributor, Dropshipper)</option>
                      <option value='Olahraga'>Olahraga (Atlet, Pembina, Pelatih)</option>
                      <option value='Seni'>Seni (Musik, Fotografi, Modelling, Desain Grafis)</option>
                    </CFormSelect>
                    <CFormFeedback valid>Data sudah diisi.</CFormFeedback>
                      <CFormFeedback invalid>Mohon untuk mengisi peminatan Anda!</CFormFeedback>
                    </CInputGroup>
                  </div>
                  <div className="mb-4">
                    <CInputGroup>
                    <CInputGroupText style={{backgroundColor: 'grey', borderColor:'green'}}>
                      <CIcon icon={freeSet.cilLockLocked} />
                    </CInputGroupText>
                    <CFormSelect
                      placeholder="Minat 2"
                      autoComplete="secondInterest"
                      onChange={(e) => setSecondInterest(e.target.value)}
                    >
                      <option>Pilih salah satu peminatan</option>
                      <option value='Edukasi'>Edukasi (Pengajar, Studi di Perguruan Tinggi)</option>
                      <option value='Telekomunikasi'>Telekomunikasi (Progammer Komputer, Analist Sistem Komputer, Arsitek Database, Administrator Sistem Jaringan dan Komputer)</option>
                      <option value='IT'>Informatika (Web Developer, Software Engineer, Game Developer)</option>
                      <option value='Komunikasi'>Komunikasi (Administrator, Customer Service, Marketing, Jurnalis, Influencer)</option>
                      <option value='Wirausaha'>Wirausaha (Food and Beverage, Produsen Kreatif, Distributor, Dropshipper)</option>
                      <option value='Olahraga'>Olahraga (Atlet, Pembina, Pelatih)</option>
                      <option value='Seni'>Seni (Musik, Fotografi, Modelling, Desain Grafis)</option>
                    </CFormSelect>
                    </CInputGroup>
                  </div>
                  <div className="mb-4">
                    <CInputGroup>
                    <CInputGroupText style={{backgroundColor: 'grey', borderColor:'green'}}>
                      <CIcon icon={freeSet.cilLockLocked} />
                    </CInputGroupText>
                    <CFormSelect
                      placeholder="Minat 3"
                      autoComplete="thirdInterest"
                      onChange={(e) => setThirdInterest(e.target.value)}
                    >
                      <option>Pilih salah satu peminatan</option>
                      <option value='Edukasi'>Edukasi (Pengajar, Studi di Perguruan Tinggi)</option>
                      <option value='Telekomunikasi'>Telekomunikasi (Progammer Komputer, Analist Sistem Komputer, Arsitek Database, Administrator Sistem Jaringan dan Komputer)</option>
                      <option value='IT'>Informatika (Web Developer, Software Engineer, Game Developer)</option>
                      <option value='Komunikasi'>Komunikasi (Administrator, Customer Service, Marketing, Jurnalis, Influencer)</option>
                      <option value='Wirausaha'>Wirausaha (Food and Beverage, Produsen Kreatif, Distributor, Dropshipper)</option>
                      <option value='Olahraga'>Olahraga (Atlet, Pembina, Pelatih)</option>
                      <option value='Seni'>Seni (Musik, Fotografi, Modelling, Desain Grafis)</option>
                    </CFormSelect>
                    </CInputGroup>
                  </div>
                  <div className="d-grid">
                    <CButton color="success" onClick={(event) => handleSubmit(event)}>
                      Selesai
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
  )
};

export default Create;
