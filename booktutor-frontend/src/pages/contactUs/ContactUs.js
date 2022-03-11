import React, { useState } from 'react'
import {Form ,Button} from 'react-bootstrap';
import './contactUS.css'
import    {postFormData} from '../../services/formSubmission'

function ContactUs() {

 const [formData, setFormData] = useState({
     userName:'',
     userEmail:'',
     userClass:'',
     address:'',
     primaryPhone:'',
     secondaryPhone:'',
     date:'',
     isParent:''
 })

 const onChangeHandler = (e) => {
    const { name, value , id } = e.target;
    if(name==='isParent')
    setFormData({...formData , [name]:id==='student'?false:true})
    else
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const res=await postFormData(formData);
    console.log(res);
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
    <Form.Control type='text' name='userName'  placeholder="User Name" value={formData.userName}  onChange={onChangeHandler}  />
  </Form.Group>

  <Form.Group className="mb-3" controlId="Email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name='userEmail' placeholder="Enter email" value={formData.userEmail}  onChange={onChangeHandler}  />
  </Form.Group>

  {/* <Form.Group className="mb-3" controlId="Class">
    <Form.Label>Class</Form.Label>
    <Form.Control type="text" name="class" placeholder="Class" value={formData.class}  onChange={onChangeHandler}  />
  </Form.Group> */}
   
  <label htmlFor='userClass' className="mb-2">Class</label>
  <Form.Select name='userClass' value={formData.userClass} className="mb-3" onChange={onChangeHandler} aria-label="Default select example">
  <option>Select Class</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>

 

  <Form.Group className="mb-3" controlId="Address">
    <Form.Label>Adderss</Form.Label>
    <Form.Control type="text" placeholder="Address" name="address" value={formData.address}  onChange={onChangeHandler} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="PrimaryPhone">
    <Form.Label>Primary Phone No.</Form.Label>
    <Form.Control type='tel' placeholder="Primary Phone No." name="primaryPhone" value={formData.primaryPhone}  onChange={onChangeHandler}  />
  </Form.Group>

  <Form.Group className="mb-3" controlId="SecondaryPhone">
    <Form.Label>Secondary Phone No.</Form.Label>
    <Form.Control type="tel" placeholder="Secondary Phone No." name="secondaryPhone" value={formData.secondaryPhone}  onChange={onChangeHandler} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="date">
    <Form.Label>Appointment Date</Form.Label>
    <Form.Control type="date" placeholder="Appointment Date" name="date" value={formData.date}  onChange={onChangeHandler} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="isParent" >
   <Form.Check name='isParent' label='Parent' type='radio' id='parent' value={formData.isParent}  onChange={onChangeHandler} inline/>
   
   <Form.Check name='isParent' label='Student' type='radio' id='student'  inline value={formData.isParent}  onChange={onChangeHandler} />
    
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