import React from "react";
import Form from "react-bootstrap/Form";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Forms() {
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
    <div className="hp-form">
      <div className="hp-form-wrapper">
        <div className="hp-form-left-panel">
          <img
            className="steps-imgbox bounce-6 hp-form-left-panel-image"
            src="https://i.postimg.cc/jdSJXV2N/class03.png"
            alt=""
          />
        </div>
        <div className="hp-form-right-panel">
          <h1>QUICK CALLBACK</h1>
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
                type="number"
                placeholder="Enter Phone"
                name="user_phone"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail" required>
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
  );
}

export default Forms;
