import React from "react";
import Header from "./Header";
import Form from "react-bootstrap/Form";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6uu32dr",
        "template_0lxww4m",
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
  return (
    <>
      <Header />
      <div className="hp-contact-us">
        <div className="hp-contact-us-wrapper">
          <h1 className="hp-contact-us">CONTACT US</h1>
          <h4>
            Our Support Team is always available via Email/Phone.
            <br /> Please fill the contact form to request a callback.
          </h4>{" "}
          <hr />
          <br />
          <h5>
            Email : info@mydurbar.com
            <br />
            <br />
            Phone : +91-9643699643
          </h5>
        </div>
        <div className="hp-contact-form">
          <div className="hp-form-wrapper">
            <div className="hp-form-right-panel">
              <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="user_name"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Phone"
                    name="user_phone"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  required
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="user_email"
                  />
                </Form.Group>

                <button
                  variant="outline-warning"
                  className="step-orangeBtn form-button"
                  type="submit"
                >
                  Get in Touch <i className="pi pi-envelope"></i>
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
