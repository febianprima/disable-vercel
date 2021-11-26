import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  Image,
  NavLink,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { freeSet } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import Api from "../Utils/Api";
import axios from "axios";

let user = JSON.parse(localStorage.getItem("userData"));
console.log(user)

function HeaderFeed() {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  const deleteAccount = async (event) => {
    await axios
      .delete(Api.deleteUser + `/${user.id}`)
      .then((res) => {
        const result = res.data;
        console.log(result);
        if (res.status === 200) {
          navigate("/login");
          event.preventDefault();
          localStorage.clear();
        } else {
          alert(result.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Navbar
      expand="lg"
      style={{
        top: "0",
        position: "sticky",
        zIndex: "10",
        backgroundColor: "#34BE82",
        height: "90px",
      }}
    >
      <Navbar.Brand
        className="ms-4 ps-4"
        href={`/feed/${user.id}`}
      >
        <Image
          style={{ width: "40px" }}
          src={"/Assets/icon.png"}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Form className="d-flex">
            <CIcon
              icon={freeSet.cilSearch}
              style={{ width: "22px", color: "black" }}
            />
            <FormControl
              type="search"
              placeholder="Search"
              className="ms-2"
              aria-label="Search"
              style={{
                border: "none",
                width: "30vw",
                borderBottomColor: "black",
              }}
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
      <NavLink
        className="text-center pt-4"
        href={`/feed/${user.id}`}
      >
        <Image
          style={{ width: "20px" }}
          src={"/Assets/home.png"}
          href={`/feed/${user.id}`}
        />
        <p className='mt-2' style={{ color: "white", fontSize: "8pt" }}>Beranda</p>
      </NavLink>
      <NavLink
        className="text-center pt-4"
        href={`/connection/${user.id}`}
      >
        <Image
          style={{ width: "27px" }}
          src={"/Assets/user.png"}
        />
        <p className='mt-1' style={{ color: "white", fontSize: "8pt" }}>Koneksi</p>
      </NavLink>
      <NavLink
          className="text-center pt-4"
          href={`/job`}
        >
          <Image
            style={{ width: "20px" }}
            src={"/Assets/bag.png"}
          />
          <p className='mt-2' style={{ color: "white", fontSize: "8pt" }}>Lowongan</p>
        </NavLink>
      <NavLink
        className="text-center pt-4"
        href={`/chat/${user.id}`}
      >
        <Image
          style={{ width: "22px" }}
          src={"/Assets/chat.png"}
        />
        <p className='mt-2' style={{ color: "white", fontSize: "8pt" }}>Chat</p>
      </NavLink>
      <NavLink
        className="text-center pt-4"
        href={`/notification/${user.id}`}
      >
        <Image
          style={{ width: "22px" }}
          src={"/Assets/bell.png"}
        />
        <p className='mt-2' style={{ color: "white", fontSize: "8pt" }}>Notifikasi</p>
      </NavLink>
      <NavLink
        className="text-center"
        href={`/profile/${user.id}`}
      >
        <Image
          style={{ width: "40px" }}
          className="text-primary mb-1"
          src={"/Assets/Pic1.png"}
          roundedCircle
        />
      </NavLink>
      <NavDropdown className="me-5 pe-3">
        <NavDropdown.Item onClick={deleteAccount}>Hapus Akun</NavDropdown.Item>
        <NavDropdown.Item onClick={logOut}>Keluar</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
}

export default HeaderFeed;
