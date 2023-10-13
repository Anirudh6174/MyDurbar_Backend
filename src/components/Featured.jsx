import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";

function Featured() {
  return (
    <Container>
      <Row className="featured-row">
        <Col>
          <div className="featured-description">
            <h3 className="featured-description-h3">Our top stars</h3>
            <h1 className="featured-description-h1">MEET TRENDING ARTISTS</h1>
            <p className="featured-p-tag">
              Our AI Engine automatically searches for the top performing
              artists in your locality
            </p>
            <a href="/bookartist">
              <button variant="outline-warning" className="step-orangeBtn">
                View All <i className="pi pi-arrow-right"></i>
              </button>
            </a>
          </div>
        </Col>
        <Col>
          <a href="/bookartist">
            <img
              className="featured-images"
              src="https://i.postimg.cc/05ML6Dbp/ADHRIT-2.jpg"
              alt=""
            />
          </a>
        </Col>
        <Col>
          <a href="/bookartist">
            <img
              className="featured-images"
              src="https://i.postimg.cc/WbqwDYWV/CDS_Bhatti_(19).jpg"
              alt=""
            />
          </a>
        </Col>
      </Row>
      <Row className="featured-row">
        <Col>
          <a href="/bookartist">
            <img
              className="featured-images"
              src="https://i.postimg.cc/y8PcnYz2/qqqqq.png"
              alt=""
            />
          </a>
        </Col>
        <Col>
          <a href="/bookartist">
            <img
              className="featured-images"
              src="https://i.postimg.cc/0N2Ky85B/Ayush-Kaushik-3.jpg"
              alt=""
            />
          </a>
        </Col>
        <Col>
          <a href="/bookartist">
            <img
              className="featured-images"
              src="https://i.postimg.cc/pLLbqT2C/Shraddha_Tiwari_(16).jpg"
              alt=""
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Featured;
