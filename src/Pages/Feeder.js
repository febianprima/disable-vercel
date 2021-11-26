import React, { useState,useEffect } from "react";
import HeaderFeed from "../Components/HeaderFeed";
import { Link,useNavigate } from "react-router-dom";
import {
  Container,
  Image,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  FormInput
} from "react-bootstrap";
import axios from "axios";
import Api from "../Utils/Api";
import { useQuery } from '@apollo/client';
import { GET_FEED } from '../Utils/Query';

function Feed() {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState("");
  const [video, setVideo] = useState("");
  const [article, setArticle] = useState("");
  const [isLoad, setLoad] = useState(false);
  const [id, setID] = useState();
  const { loading, error, data } = useQuery(GET_FEED, {
    variables: { id: id}
  });

  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(!userData){
      navigate('/login')
      } else{
      setID(userData.id)
    }
  }, [] )

  if(loading){
    return <div>Loading</div>
  }

  if (error){
    return <div>{error.toString()}</div>
  }

  console.log(data.users[0].contents)

  const handleSubmit = async (event) => {
    event.preventDefault()

    await axios
      .post(Api.createFeed, { 
        userID: id,
        photo,
        video,
        article
      })
      .then((res) => {
        const result = res.data;
        console.log(result);

        if(res.status === 200){
            event.preventDefault();           
            alert(result.message);
        }
        
      })
      .catch((err) => {
        console.log(err);
      })
  }

return (
  <>
    <div>
      <HeaderFeed />
      <Container>
        <Col className="mt-4">
          <Row lg="3" className="d-flex justify-content-center mb-3">
            <Card 
              style={{ width: "90rem", 
                height: "20rem",
                color:'white', 
                backgroundColor:'#34BE82',
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px" }}>
              <div className="d-flex justify-content-center mt-3">
                <Link to={`/profile/${id}`}>
                  <Image
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    variant="top"
                    src={process.env.PUBLIC_URL +"/Assets/Pic1.png"}
                    roundedCircle
                  />
                </Link>
              </div>
              <Card.Body className="text-center">
                <Link
                  style={{ textDecoration: "none", color:'black' }}
                  to={`/profile/${id}`}
                >
                  <Card.Title style={{fontWeight:'bolder',fontSize:'24pt'}}>{data.users[0].profile[0].firstName} {data.users[0].profile[0].lastName}</Card.Title>
                </Link>
                <Card.Text style={{fontSize:'12pt'}}>@{data.users[0].username}</Card.Text>
                <Card.Text style={{fontWeight:'bolder',fontSize:'14pt', color:'lavender'}}>{data.users[0].profile[0].status}</Card.Text>
                <Link style={{ textDecoration: "none", color:'black' }} to={`/connection/${id}`}>
                  <Card.Text style={{fontWeight:'bold',fontSize:'12pt'}}>{data.users[0].contact.length} Koneksi</Card.Text>
                </Link>
              </Card.Body>
            </Card>
          </Row>
          <Row lg="8">
            <Card className="mb-3" style={{backgroundColor:'whitesmoke'}}>
              <div className="d-flex">
                <Image
                  className="mt-3"
                  style={{ width: "60px", height: "60px" }}
                  src={"/Assets/Pic1.png"}
                  roundedCircle
                />
                <form>
                    <Row>
                        <textarea
                            className="mt-3 mb-3 ms-4"
                            style={{ borderRadius: "5px", 
                              width: "75vw", 
                              height: "150px" }}
                            size="sm"
                            variant="outline-secondary"
                            placeholder="Apa yang terjadi?"
                            
                            onChange={(e) => setArticle(e.target.value)}
                        >
                        </textarea>
                    </Row>
                    <Row>
                        <div className="d-flex justify-content-end">
                    <Button value="Submit"
                        className="ms-4"
                        style={{backgroundColor:'#34BE82', 
                            borderRadius: "20px", 
                            width: "90px",
                            height: "35px",
                            textAlign:"center", 
                            color: "white", 
                            fontWeight:"bold", 
                            borderColor:"silver", 
                            float:"right"}} 
                        onClick={(event)=>handleSubmit(event)}
                    >
                    Kirim
                    </Button>
                    </div>
                    </Row>
                </form>
              </div>
              <Card.Body>
                <Row>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/gallery.png"
                    />
                    <span className="ms-2">Foto</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/multimedia.png"
                    />
                    <span className="ms-2">Video</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/timetable.png"
                    />
                    <span className="ms-2">Acara</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/document.png"
                    />
                    <span className="ms-2">Article</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            {data.users[0].contents.map((item,index)=>(
              <Card className="mb-5" key={index}>
              <div className="d-flex mt-3 ms-3">
                <Image
                  className="mt-2 ms-2"
                  style={{ width: "60px", height: "60px" }}
                  src={process.env.PUBLIC_URL +"/Assets/Pic1.png"}
                />
                <Card.Title className="ms-3 mt-3">{item.user.profile[0].firstName} {item.user.profile[0].lastName}
                  <Card.Text className='mt-2' style={{color:'seafoam', fontSize:'10pt'}}>@{item.user.username}</Card.Text>
                </Card.Title>
              </div>
              <div className="d-flex">
              
              </div>
              <Card.Body>
                <Card.Text className='ms-5 ps-4 mt-3'>
                  {item.article}
                </Card.Text>
              </Card.Body>
              <Card.Body className='mt-3'>
                <Row>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/like.png"
                    />
                    <span className="ms-2">Like</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/comment.png"
                    />
                    <span className="ms-2">Comment</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/share.png"
                    />
                    <span className="ms-2">Share</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/send.png"
                    />
                    <span className="ms-2">Send</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            ))}
          </Row>
        </Col>
      </Container>
    </div>
  </>
  );
}

export default Feed;