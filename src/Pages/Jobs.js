import React from "react";
import Header from "../Components/HeaderFeed";
import Footer from "../Components/Footer";
import { GET_JOBS } from "../Utils/Query";
import { useQuery } from "@apollo/client";
import { Container, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Jobs() {
  let navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_JOBS);
  if (loading) return "Loading...";
  if (error) return "Error!";

  const handleDetail = (id) => {
    navigate(`/job/${id}`);
  };

  const textStyle = {
    maxWidth: "100%",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3,
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <div>
      <Header />
      <Image
        style={{ width: "100%", height: "600px", objectFit: "cover" }}
        src={"/Assets/Image.jpg"}
      />
      <Container className="mt-3 mb-5">
        <div className="text-center mt-4 mb-5">
          <h1>Cari Lowongan Sesuai Keunikanmu</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {data.jobs.map((item) => {
            return (
              <div className="col" key={item.id}>
                <div className="card h-100">
                  <Image src={item.gambar} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h3 className="card-title">{item.posisi}</h3>
                    <h4>{item.nama_pt}</h4>
                    <p style={textStyle} className="card-text">
                      {item.persyaratan}
                    </p>
                    <Button
                      onClick={() => handleDetail(item.id)}
                      className="ms-lg-3"
                      variant="warning"
                    >
                      Detail
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default Jobs;
