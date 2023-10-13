import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Categories() {
  return (
    <div className="hp-categories">
      <h3>Categories</h3>
      <h1>EXPLORE FROM A WIDE RANGE BELOW</h1>
      <div className="hp-card-wrapper">
        <Row className="featured-row">
          <Col className="cat-col">
            <Card bg="light">
              <a href="/bookartist">
                <Card.Img
                  className="cat-images"
                  variant="top"
                  src="https://i.postimg.cc/ZK2PmkS3/Raghav_Sharma_(2).jpg"
                />
              </a>
              <Card.Body>
                <Card.Title>Singer</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="cat-col">
            <Card>
              <a href="/bookartist">
                <Card.Img
                  className="cat-images"
                  variant="top"
                  src="https://i.postimg.cc/kgvGtDTy/Shivam_Tiwari_(23).jpg"
                />
              </a>
              <Card.Body>
                <Card.Title>Anchor</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="cat-col">
            <Card>
              <a href="/bookartist">
                <Card.Img
                  className="cat-images"
                  variant="top"
                  src="https://i.postimg.cc/NF3PqV4x/Vinay_Grover_(4).jpg"
                />
              </a>
              <Card.Body>
                <Card.Title>DJ</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="featured-row">
          <Col className="cat-col">
            <Card>
              <a href="/bookartist">
                <Card.Img
                  className="cat-images"
                  variant="top"
                  src="https://i.postimg.cc/KzPd4X8S/aswe.jpg"
                />
              </a>
              <Card.Body>
                <Card.Title>Instrumental</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="cat-col">
            <Card>
              <a href="/bookartist">
                <Card.Img
                  className="cat-images"
                  variant="top"
                  src="https://i.postimg.cc/W36TCWC8/nm.jpg"
                />
              </a>
              <Card.Body>
                <Card.Title>Classical Singer</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="cat-col">
            <Card>
              <a href="/bookartist">
                <Card.Img
                  className="cat-images"
                  variant="top"
                  src="https://i.postimg.cc/kXfXnLGj/Tathaagat_Project_(30).jpg"
                />
              </a>
              <Card.Body>
                <Card.Title>Band</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Categories;
