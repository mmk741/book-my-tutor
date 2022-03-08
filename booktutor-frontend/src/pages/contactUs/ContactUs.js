import React, { useState } from 'react'
import {Form ,Button} from 'react-bootstrap';
import './contactUS.css'

function ContactUs() {

 const [formData, setFormData] = useState({
     userName:'',
     emailAddress:'',
     class:'',
     address:'',
     primaryPhone:'',
     secondaryPhone:'',
     appointmentDate:'',
     person:''
 })

 const onChangeHandler = (e) => {
    const { name, value , id } = e.target;
    if(name==='person')
    setFormData({...formData , [name]:id})
    else
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   console.log(formData);

  }

  return (
    <>
  <div className='container '>

  
     <div className='jumbotron'>

        <div><h3>Appointment Form</h3></div>

     <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3 " controlId="UserName">
    <Form.Label>User Name</Form.Label>
    <Form.Control type='text' name='userName'  placeholder="User Name" value={formData.userName}  onChange={onChangeHandler} required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="Email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='emailAddress' placeholder="Enter email" value={formData.emailAddress}  onChange={onChangeHandler} required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="Class">
    <Form.Label>Class</Form.Label>
    <Form.Control type="text" name="class" placeholder="Class" value={formData.class}  onChange={onChangeHandler} required />
  </Form.Group>

 

  <Form.Group className="mb-3" controlId="Address">
    <Form.Label>Adderss</Form.Label>
    <Form.Control type="text" placeholder="Address" name="address" value={formData.address}  onChange={onChangeHandler} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="PrimaryPhone">
    <Form.Label>Primary Phone No.</Form.Label>
    <Form.Control type='tel' placeholder="Primary Phone No." name="primaryPhone" value={formData.primaryPhone}  onChange={onChangeHandler} required />
  </Form.Group>

  <Form.Group className="mb-3" controlId="SecondaryPhone">
    <Form.Label>Secondary Phone No.</Form.Label>
    <Form.Control type="tel" placeholder="Secondary Phone No." name="secondaryPhone" value={formData.secondaryPhone}  onChange={onChangeHandler} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="AppointmentDate">
    <Form.Label>Appointment Date</Form.Label>
    <Form.Control type="date" placeholder="Appointment Date" name="appointmentDate" value={formData.appointmentDate}  onChange={onChangeHandler} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="person" >
   <Form.Check name='person' label='Parent' type='radio' id='parent' value={formData.person}  onChange={onChangeHandler} inline/>
   
   <Form.Check name='person' label='Student' type='radio' id='student'  inline value={formData.person}  onChange={onChangeHandler} />
    
  </Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
     </div>

</div>

    </>
  )
}

export default ContactUs