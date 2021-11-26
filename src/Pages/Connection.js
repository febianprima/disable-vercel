import React from "react";
import Header from "../Components/HeaderFeed.js";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroupItem,
  Image,
  ListGroup,
  CardGroup,
} from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { useQuery } from '@apollo/client';
import { GET_CONNECTION } from '../Utils/Query';

const Connection = () => {
  const user = JSON.parse(localStorage.getItem('userData'));
  const navigate = useNavigate();

  if (!user) {
    navigate('/login')
  } else{
    const userID = user.id;
  }

  const id = user.id;

  const { loading, error, data } = useQuery(GET_CONNECTION, {
    variables: { id: id}
  });

  if(loading){
    return <div>Loading</div>
  }

  if (error){
    return <div>{error.toString()}</div>
  }
  console.log(data.users[0].contact)

  return (
    <div>
      <Header />

      <Container>
        <Col className="mt-5">
          <Row lg="3" className="d-flex justify-content-center mb-3">
            <Card 
              style={{ width: "90rem", 
              backgroundColor:'#34BE82',
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px"
              }}
            >
              <div className="d-flex justify-content-center mt-3">
                <Link to={`/profile/${user.id}`}>
                  <Image
                    className='mt-4'
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    variant="top"
                    src={"/Assets/Pic1.png"}
                    roundedCircle
                  />
                </Link>
              </div>
              <Card.Body className="text-center">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/profile"
                >
                  <Card.Title>{data.users[0].profile[0].firstName} {data.users[0].profile[0].lastName}</Card.Title>
                </Link>
                <Card.Text>@{data.users[0].username}</Card.Text>
                <Card.Text>{data.users[0].contact.length} Koneksi</Card.Text>
              </Card.Body>
            </Card>
            </Row>
            <Row>
              <Card style={{ width: "90rem", backgroundColor:'whitesmoke'}}>
                <Card.Body className="text-center">
                <Card.Title style={{fontSize:'30pt', fontWeight:'bolder', textAlign:'center'}}>Koneksi Anda</Card.Title>
                <Row>
                  <CardGroup>
                    {data.users[0].contact.map((item,index)=>(
                      <Card className="m-3 text-center align-items-center" style={{backgroundColor:'#34BE82', borderRadius:'2' }}>
                        <Card.Img variant="top" className='mt-4' style={{width:'200px', borderRadius:'100%' }} src={"/Assets/Pic1.png"} />
                        <Card.Body>
                          <Card.Title>{item.connection.profile[0].firstName} {item.connection.profile[0].lastName}</Card.Title>
                          <Card.Text>@{item.connection.username}</Card.Text>
                          <Card.Text className='mb-4' >{item.connection.profile[0].status}</Card.Text>
                        </Card.Body>
                      </Card>
                    )) }
                  </CardGroup>
                </Row>
                </Card.Body>
              </Card>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Connection;
