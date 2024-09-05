import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import AdminNavBar from '../../components/AdminNavBar';

const AddTrainerForm = () => {
  const [trainer, setTrainer] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    address: '',
    homeTown: '',
    experiences: '',
  });

  const handleChange = (e) => {
    setTrainer({
      ...trainer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Trainer Data:', trainer);
    // Add logic here to handle form submission, such as sending data to an API
  };

  return (
    <div>
        <AdminNavBar/>
        
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={trainer.name}
          onChange={handleChange}
          placeholder="Enter trainer's name"
        />
      </Form.Group>

      <Form.Group controlId="formAge" className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          name="age"
          value={trainer.age}
          onChange={handleChange}
          placeholder="Enter age"
        />
      </Form.Group>

      <Form.Group controlId="formGender" className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Control
          as="select"
          name="gender"
          value={trainer.gender}
          onChange={handleChange}
        >
          <option value="">Choose...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={trainer.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group controlId="formAddress" className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={trainer.address}
          onChange={handleChange}
          placeholder="Enter address"
        />
      </Form.Group>

      <Form.Group controlId="formHomeTown" className="mb-3">
        <Form.Label>Home Town</Form.Label>
        <Form.Control
          type="text"
          name="homeTown"
          value={trainer.homeTown}
          onChange={handleChange}
          placeholder="Enter home town"
        />
      </Form.Group>

      <Form.Group controlId="formExperiences" className="mb-3">
        <Form.Label>Experiences</Form.Label>
        <Form.Control
          type="text"
          name="experiences"
          value={trainer.experiences}
          onChange={handleChange}
          placeholder="Enter experiences"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Trainer
      </Button>
    </Form>
    </div>
    
  );
};

export default AddTrainerForm;
