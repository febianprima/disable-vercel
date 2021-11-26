import React from "react";
import { Container, Image, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { GET_JOBS_BY_ID } from "../Utils/Query";
import { useQuery } from "@apollo/client";

function JobsDetail() {
  let { id } = useParams();
  const { loading, error, data } = useQuery(GET_JOBS_BY_ID, {
    variables: { id: id },
  });
  if (loading) return "Loading....";
  if (error) return `Error! ${error.message}`;

  return (
    <Container className="mb-5">
      {data.jobs.map((item) => {
        return (
          <div key={item.id}>
            <div className="text-center mt-3 mb-3">
              <Image style={{ width: "30vw" }} src={item.gambar} />
            </div>
            <h3>Posisi: {item.posisi}</h3>
            <h3>{item.nama_pt}</h3>
            <p>Gaji: {item.gaji}</p>
            <p>Tanggal Berlaku: {item.tanggal}</p>
            <p>{item.persyaratan}</p>
            <br></br>
            <p>Email / Kontak Perusahaan: {item.email_pt}</p>
            <p>Alamat Perusahaan: {item.alamat_pt}</p>
            <Link to="/job">
              <Button>Back to Jobs</Button>
            </Link>
          </div>
        );
      })}
    </Container>
  );
}

export default JobsDetail;
