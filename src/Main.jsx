import React from "react";

import About from "./components/About";
import Banner from "./components/Banner";
import CallToAction from "./components/CallToAction";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Forms from "./components/Forms";
import SliderRevo from "./components/SliderRevo";
import Steps from "./components/Steps";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import ArtistForm from "./components/ArtistForm";
import ContactUs from "./components/ContactUs";
import Instrumentalist from "./components/Instrumentalist";
import { useHistory } from "react-router-dom";
import SearchBarMain from "../src/components/SearchBarMain";
export default function Main() {
  const [modalShow, setModalShow] = useState(true);


  return (
    <>
      <Modal
        size="lg"
        show={modalShow}
        enforceFocus="true"
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered="true"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Are you an ARTIST or BUSINESS OWNER
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col>
                <Button variant="outline-warning" href="/forartist">
                  ARTISTS
                </Button>
                <br />
                <br />
                <p>
                  Join us to get access to over 1000 leads and opportunities
                  with a hassle free profile, payments and date management.
                </p>
              </Col>
              <Col>
                <Button variant="outline-warning" href="/contactus">
                  BUSINESS OWNER
                </Button>
                <br />
                <br />
                <p>
                  Explore mydurbar.com for your business - manage artists,
                  performances and experiences with our seamless platform to
                  take away your cost overheads
                </p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Header />
      <SearchBarMain/>
     
      <SliderRevo />
      <About />
      <Steps />
      <Categories />
      <CallToAction />
      <Featured />
      <Banner />
      <Forms />
      <Footer />
    </>
  );
}
