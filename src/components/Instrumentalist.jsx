import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import qrCode from "../assets/qrcode.png";
import { Rating } from "primereact/rating";
import { Button } from "primereact/button";
import { default as BootStrapBtn } from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import * as dataFile from "../constants/DataFile";
import Badge from "react-bootstrap/Badge";
import Modal from "react-bootstrap/Modal";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import PopUp from "./PopUp";
import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import Header from "./Header";

export default function ArtistProfile() {
  // Creating ref for scrolling into Div

  // Handle NavBar clickScroll eventKey ->
  // is the same as the id of the div for their respective NavItem
  const handleSelect = (eventKey) => {
    var h = document.getElementById(eventKey).clientHeight;
    console.log(h);
    window.scrollTo(0, h);
  };

  // Email JS for form submission
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6uu32dr",
        "template_fkj5uv9",
        form.current,
        "DSyAWEFrE_6p_tDmP"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  // Genre List from DataFile

  const [showPopUp, setShowPopUp] = useState(false);
  const [bookNowPopUp, setBookNowPopUp] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  const [showrevisedQuotePopUp, setshowrevisedQuotePopUp] = useState(false);
  const [revisedQuotePopUp, setRevisedQuotePopUp] = useState(false);

  const [showreviewPopUp, setshowreviewPopUp] = useState(false);
  const [reviewPopUp, setReviewPopUp] = useState(false);

  //  Rating Value in review form
  const [val2, setVal2] = useState(null);

  //  Calender in Review Form
  const [date3, setDate3] = useState(null);

  // function to close booking modal
  function closeBooking() {
    setBookNowPopUp(false);
    setPaymentDone(false);
  }

  function closeRevised() {
    setRevisedQuotePopUp(false);
  }

  function closeReview() {
    setReviewPopUp(false);
  }

  // function to submit formData
  function handleSubmit(event) {
    console.log(event);
  }

  useEffect(() => {
    const timeId = setTimeout(() => setShowPopUp(true), 3000);

    return () => clearTimeout(timeId);
  });

  useEffect(() => {
    const timeId = setTimeout(() => setshowrevisedQuotePopUp(true), 3000);

    return () => clearTimeout(timeId);
  });

  useEffect(() => {
    const timeId = setTimeout(() => setshowreviewPopUp(true), 3000);

    return () => clearTimeout(timeId);
  });

  return (
    <>
      <Header />
      <div className="ap-body-Wrapper">
        {/* Book Now Modal; handled by -handleBookNow() */}
        <Modal
          show={bookNowPopUp}
          onHide={() => closeBooking()}
          backdrop="static"
          variant="dark"
          size="lg"
          centered
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Thanks for choosing : Wajid Ahmed Khan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              You can choose from the following payment methods to Book the
              artist.
            </p>
            <Tabs
              defaultActiveKey="payumoney"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="upi" title="UPI Wallet" disabled>
                {!paymentDone ? (
                  <div>
                    <h5>
                      Please scan the following barcode for payment through UPI.
                    </h5>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      <img style={{ maxWidth: 250 }} src={qrCode} />
                    </div>
                    <hr />
                    <div
                      style={{
                        marginTop: "45px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <ul style={{ textAlign: "center", marginTop: "15px" }}>
                        <li>
                          <a href="#">
                            <img
                              alt="MessIcon"
                              style={{
                                maxWidth: "145px",
                              }}
                              src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/GooglePay_Lockup.max-1200x1200.png"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              alt="instaIcon"
                              style={{
                                maxWidth: "145px",
                              }}
                              src="data:image/png;base64,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"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              alt="fbIcon"
                              style={{
                                maxWidth: "145px",
                              }}
                              src="https://logos-world.net/wp-content/uploads/2020/11/Paytm-Symbol.png"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <h5>
                      Once Payment made please click on the next button and
                      submit the form.
                      <br />
                      <Badge bg="warning" text="dark">
                        Please keep the Payment Ref Code handy !
                      </Badge>
                    </h5>
                    <BootStrapBtn
                      variant="dark"
                      size="md"
                      onClick={() => setPaymentDone(true)}
                    >
                      Fill Details
                    </BootStrapBtn>
                  </div>
                ) : (
                  <div>
                    <div className="ap-bookingForm">
                      <span className="p-float-label">
                        <InputText
                          id="username"
                          onChange={(e) => console.log(e)}
                        />
                        <label htmlFor="username">Name</label>
                      </span>
                      <br />
                      <span className="p-float-label">
                        <InputText
                          id="username"
                          onChange={(e) => console.log(e)}
                        />
                        <label htmlFor="username">Email</label>
                      </span>
                      <br />
                      <span className="p-float-label">
                        <InputNumber
                          id="username"
                          onChange={(e) => console.log(e)}
                        />
                        <label htmlFor="username">Phone Number</label>
                      </span>
                      <br />
                      <span className="p-float-label">
                        <InputNumber
                          id="username"
                          onChange={(e) => console.log(e)}
                        />
                        <label htmlFor="username">Payment Ref Number</label>
                      </span>
                      <br />
                      <span className="p-float-label">
                        <InputTextarea
                          id="username"
                          onChange={(e) => console.log(e)}
                        />
                        <label htmlFor="username">Payment Ref Number</label>
                      </span>
                      <br />
                      <div className="ap-actionButtons">
                        <BootStrapBtn
                          variant="dark"
                          onClick={() => handleSubmit()}
                        >
                          Sending Booking Info
                        </BootStrapBtn>
                        <BootStrapBtn
                          variant="dark"
                          onClick={() => setPaymentDone(false)}
                        >
                          {" "}
                          Show UPI QRcode
                        </BootStrapBtn>
                      </div>
                    </div>
                  </div>
                )}
              </Tab>
              <Tab eventKey="payumoney" title="PayUMoney">
                <div>
                  <h5>Total Amount : ₹ 12000</h5>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      style={{ maxWidth: 250 }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/PayU.svg/1200px-PayU.svg.png"
                    />
                  </div>
                  <hr />
                  <div
                    style={{
                      marginTop: "45px",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  ></div>
                  <h5>
                    <br />
                    <Badge bg="warning" text="dark">
                      Click the button to initiate payment
                    </Badge>
                  </h5>

                  <BootStrapBtn
                    href="https://pmny.in/8IDMaCtzyoGP"
                    target="_blank"
                    variant="success"
                    size="md"
                    onClick={() => setPaymentDone(true)}
                  >
                    Make Payment
                  </BootStrapBtn>
                </div>
              </Tab>
            </Tabs>
          </Modal.Body>
          <Modal.Footer>
            <BootStrapBtn variant="secondary" onClick={() => closeBooking()}>
              Cancel
            </BootStrapBtn>{" "}
          </Modal.Footer>
        </Modal>
        {/* Request Revised Quote PopUp */}
        <PopUp showPopUp={showPopUp} />
        <Modal
          ref={form}
          onSubmit={sendEmail}
          show={revisedQuotePopUp}
          onHide={() => closeRevised()}
          backdrop="static"
          variant="dark"
          size="lg"
          centered
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Revised Requested Quote for Wajid Ahmed Khan
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Please enter your details and someone will contact you about your
              query
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <div className="ap-bookingForm">
                  <span className="p-float-label">
                    <InputText
                      name="user_name"
                      id="user_name"
                      onChange={(e) => console.log(e)}
                    />
                    <label htmlFor="user_name">Name</label>
                  </span>
                  <br />
                  <span className="p-float-label">
                    <InputText
                      name="user_email"
                      id="user_email"
                      onChange={(e) => console.log(e)}
                    />
                    <label htmlFor="user_email">Email</label>
                  </span>
                  <br />
                  <span className="p-float-label">
                    <InputNumber
                      name="user_phone"
                      id="user_phone"
                      onChange={(e) => console.log(e)}
                    />
                    <label htmlFor="user_phone">Phone Number</label>
                  </span>
                  <br />
                  <span className="p-float-label">
                    <InputNumber
                      name="user_limit"
                      id="user_limit"
                      onChange={(e) => console.log(e)}
                    />
                    <label htmlFor="user_limit">Maximum Price Limit</label>
                  </span>
                  <br />

                  <br />
                  <div className="ap-actionButtons">
                    <BootStrapBtn
                      variant="dark"
                      type="submit"
                      onClick={() => closeRevised()}
                    >
                      Request Access
                    </BootStrapBtn>
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <BootStrapBtn variant="secondary" onClick={() => closeRevised()}>
              Cancel
            </BootStrapBtn>{" "}
          </Modal.Footer>
        </Modal>
        <PopUp showrevisedQuotePopUp={showrevisedQuotePopUp} />

        {/* Review/Report Artist */}

        <PopUp showPopUp={showreviewPopUp} />
        <Modal
          show={reviewPopUp}
          onHide={() => closeReview()}
          backdrop="static"
          variant="dark"
          size="lg"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Please add a Review for Wajid Ahmed Khan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Please enter your details and someone will contact you about your
              query
            </p>

            <div>
              <div className="ap-bookingForm">
                <span className="p-float-label">
                  <h5>Choose your Rating </h5>
                  <Rating
                    value={val2}
                    cancel={false}
                    onChange={(e) => setVal2(e.value)}
                  />
                </span>
                <br />
                <h5>Review Headline</h5>
                <span className="p-float-label">
                  <InputText id="username" onChange={(e) => console.log(e)} />
                  <label htmlFor="username">
                    Provide a Summary of your Review
                  </label>
                </span>
                <br />
                <h5>Your Review</h5>
                <span className="p-float-label">
                  <InputTextarea
                    id="username"
                    onChange={(e) => console.log(e)}
                  />
                  <label htmlFor="username">Describe your experience</label>
                </span>
                <br />
                <div className="ap-bookingForm-review-wrapper">
                  <h5>Event City</h5>
                  <span className="p-float-label">
                    <InputNumber
                      id="username"
                      onChange={(e) => console.log(e)}
                    />
                    <label htmlFor="username">Location</label>
                  </span>
                  <br />
                  <h5>Event Date</h5>
                  <span className="p-float-label">
                    <div className="field col-12 md:col-4">
                      <label htmlFor="icon">Icon</label>
                      <Calendar
                        id="icon"
                        value={date3}
                        onChange={(e) => setDate3(e.value)}
                        showIcon
                      />
                    </div>
                  </span>
                  <br />
                </div>

                <h5>Your Name</h5>
                <span className="p-float-label">
                  <InputText id="username" onChange={(e) => console.log(e)} />
                  <label htmlFor="username">
                    Only your first name will be displayed with your review
                  </label>
                </span>
                <br />
                <h5>Your Email</h5>
                <span className="p-float-label">
                  <InputText id="username" onChange={(e) => console.log(e)} />
                  <label htmlFor="username">
                    Your Email is only for Review Verification
                  </label>
                </span>
                <br />

                <br />
                <div className="ap-actionButtons">
                  <BootStrapBtn variant="dark" onClick={() => handleSubmit()}>
                    Submit Review
                  </BootStrapBtn>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <BootStrapBtn variant="secondary" onClick={() => closeReview()}>
              Cancel
            </BootStrapBtn>{" "}
          </Modal.Footer>
        </Modal>
        <PopUp showreviewPopUp={showreviewPopUp} />

        {/* Profile Banner */}
        <div className="ap-profileBanner-Wrapper">
          <div className="ap-profile-ImgWrapper">
            <img
              style={{
                height: "100%",
                width: "80%",
                minWidth: 250,
                maxHeight: 600,
              }}
              src="https://i.postimg.cc/7h4Szq7b/Whats-App-Image-2022-11-14-at-10-55-00.jpg"
              alt=""
            />
          </div>
          <div className="ap-profile-banner">
            <div className="ap-display-image">
              <img
                height="150px"
                width="150px"
                src="https://i.postimg.cc/jjNW4GRf/Whats-App-Image-2022-11-14-at-10-52-14.jpg"
              />
              <h2>Wajid Ahmed Khan</h2>
              <Badge pill bg="light" text="dark">
                Instrumentalist
              </Badge>
            </div>
            <div className="ap-rating">
              <Rating value={5} cancel={false} stars={5} />
            </div>
            <h6>3 Reviews</h6>

            <div className="ap-info">
              <div style={{ width: "60%", fontSize: 24, fontWeight: 700 }}>
                <div className="ap-infoRow">
                  <div>
                    <span className="pi pi-home"> Delhi </span>
                  </div>
                  <div>
                    <span className="pi pi-tag"> Instrumentalist</span>
                  </div>
                </div>
                <div className="ap-infoRow">
                  <div>
                    <span className="pi pi-money-bill">
                      {" ₹"}
                      12000
                    </span>
                  </div>
                  <div>
                    <span className="pi pi-globe"> 6 years</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="ap-actionButtons">
              <Button
                className="p-button-rounded p-button-warning"
                label="Book Now"
                icon="pi pi-check"
                iconPos="right"
                onClick={() => {
                  setBookNowPopUp(true);
                }}
              />
              <Button
                label="Request Revised Quote"
                className="p-button-rounded p-button-outlined  p-button-primary"
                icon="pi pi-bookmark"
                iconPos="right"
                onClick={() => {
                  setRevisedQuotePopUp(true);
                }}
              />
              <Button
                label="Review / Report Artist"
                className="p-button-rounded p-button-outlined  p-button-success"
                icon="pi pi-bookmark"
                iconPos="right"
                onClick={() => {
                  setReviewPopUp(true);
                }}
              />
            </div>
          </div>
        </div>
        {/* Nav Bar  */}
        <p>
          For any help, please Call +91-9643699643 or Email at info@mydurbar.com
        </p>
        <br />
        <div className="ap-navBar-Wrapper" id="images">
          <Nav
            className="justify-content-center"
            activeKey="active"
            onSelect={handleSelect}
          >
            <Nav.Item>
              <Nav.Link eventKey="images">Images</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="vid">Videos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bio">Bio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="genre">Genres</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
        {/* Main Content */}
        <div className="ap-profileBody" id="genre">
          <h3 className="heading-search"> Media Gallery</h3>
          <div className="ap-fixedDivHeight ap-profileBody-video" id="vid">
            <div className="ap-individual-vid-card">
              <iframe
                className="ap-video-iframe"
                width="266"
                height="150"
                src="https://www.youtube.com/embed/cMiyN8TC8YM"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div className="ap-individual-vid-card">
              <iframe
                className="ap-video-iframe"
                width="266"
                height="150"
                src="https://www.youtube.com/embed/2m6jTTbhXVI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div className="ap-individual-vid-card">
              <iframe
                className="ap-video-iframe"
                width="266"
                height="150"
                src="https://www.youtube.com/embed/sZfwfHAcIwU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>

            <div className="ap-individual-vid-card">
              <iframe
                className="ap-video-iframe"
                width="266"
                height="150"
                src="https://www.youtube.com/embed/fOVFHIfto_4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <hr />
          <div className="ap-fixedDivHeight ap-profileBody-details" id="bio">
            <h3 className="heading-search"> Artist Bio</h3>
            <p className="ap-details-bio">
              <br />
              Amazing Percussionist
              <br />
              <br />
              <br />
              <br />
            </p>
          </div>
          <hr />
          <div className="ap-fixedDivHeightX ">
            <h3 className="heading-search"> Genre</h3>
            <br />
            <Carousel className="ap-genreCrousel">
              <Carousel.Item>
                <div className="ap-profileBody-photos">
                  <Card style={{ width: "15rem" }}>
                    <Card.Body>
                      <Card.Title style={{ fontSize: 23 }}>
                        Percussionist
                      </Card.Title>
                      {/* <Card.Title>---</Card.Title>
                      <Card.Title>{genreFile[eG]}</Card.Title> */}
                      {/* {dataFile.genreDescription.map((f) => (
                        {}</Card.Text>100
                      ))} */}
                    </Card.Body>
                  </Card>
                  {/* 
                  <p style={{ maxWidth: 400 }}></p> */}
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
