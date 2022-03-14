import React, { useState } from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import "./contactUS.css";
import { postFormData } from "../../services/formSubmission";

function ContactUs() {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userClass: "",
    address: "",
    primaryPhone: "",
    secondaryPhone: "",
    subject: "",
    board: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await postFormData(formData);
    console.log(res);
    console.log(formData);
  };

  return (
    <>
      <div className="container ">
        <div className="jumbotron">
          <div>
            <h3>Appointment Form</h3>
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 " controlId="UserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                placeholder="User Name"
                value={formData.userName}
                onChange={onChangeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="userEmail"
                placeholder="Enter email"
                value={formData.userEmail}
                onChange={onChangeHandler}
              />
            </Form.Group>

            <label htmlFor="userClass" className="mb-2">
              Class
            </label>
            <Form.Select
              name="userClass"
              value={formData.userClass}
              className="mb-3"
              onChange={onChangeHandler}
              aria-label="Default select example"
            >
              <option>Select Class</option>
              <option value="8">8th</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
            </Form.Select>

            <label htmlFor="subject" className="mb-2">
              Subject
            </label>
            <Form.Select
              name="subject"
              value={formData.subject}
              className="mb-3"
              onChange={onChangeHandler}
              aria-label="Default select example"
            >
              <option>Select Subject</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="math">Math</option>
            </Form.Select>

            <label htmlFor="board" className="mb-2">
              Select Board
            </label>
            <Form.Select
              name="board"
              value={formData.board}
              className="mb-3"
              onChange={onChangeHandler}
              aria-label="Default select example"
            >
              <option>Select Board</option>
              <option value="IB">IB</option>
              <option value="IGCSE">IGCSE</option>
              <option value="GCSE">GCSE</option>
              <option value="GCE">GCE</option>
              <option value="Edexcel">Edexcel</option>
              <option value="ICSE">ICSE</option>
            </Form.Select>

            <Form.Group className="mb-3" controlId="Address">
              <Form.Label>Adderss</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={onChangeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="PrimaryPhone">
              <Form.Label>Primary Phone No.</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Primary Phone No."
                name="primaryPhone"
                value={formData.primaryPhone}
                onChange={onChangeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="SecondaryPhone">
              <Form.Label>Secondary Phone No.</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Secondary Phone No."
                name="secondaryPhone"
                value={formData.secondaryPhone}
                onChange={onChangeHandler}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
