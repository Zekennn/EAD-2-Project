import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import AdminNavBar from '../../components/AdminNavBar';
import AdminFooter from '../../components/FooterAdmin';
import './AddMembership.css';
const AddMembership = () => {
  const [membershipName, setMembershipName] = useState('');
  const [typesOfMemberships, setTypesOfMemberships] = useState('');
  const [pricing, setPricing] = useState('');
  const [facilitiesAndServices, setFacilitiesAndServices] = useState('');
  const [cancellationPolicies, setCancellationPolicies] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API or store it locally
    const newMembership = {
      membershipName,
      typesOfMemberships,
      pricing,
      facilitiesAndServices,
      cancellationPolicies,
    };
    console.log('New Membership:', newMembership);
    
    // Reset the form fields after submission
    setMembershipName('');
    setTypesOfMemberships('');
    setPricing('');
    setFacilitiesAndServices('');
    setCancellationPolicies('');
  };

  return (
    <div className='AddMBody'>
        <AdminNavBar/>
        <Container className="mt-5">
      <h2 className="text-center mb-4">Add New Membership</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formMembershipName" className="mb-3">
          <Form.Label>Membership Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter membership name"
            value={membershipName}
            onChange={(e) => setMembershipName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formTypesOfMemberships" className="mb-3">
          <Form.Label>Types of Memberships</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter types of memberships (e.g., Monthly, Yearly)"
            value={typesOfMemberships}
            onChange={(e) => setTypesOfMemberships(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPricing" className="mb-3">
          <Form.Label>Pricing</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter pricing (e.g., $30/month)"
            value={pricing}
            onChange={(e) => setPricing(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formFacilitiesAndServices" className="mb-3">
          <Form.Label>Facilities and Services</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter facilities and services included"
            value={facilitiesAndServices}
            onChange={(e) => setFacilitiesAndServices(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formCancellationPolicies" className="mb-3">
          <Form.Label>Cancellation Policies</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter cancellation policies"
            value={cancellationPolicies}
            onChange={(e) => setCancellationPolicies(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Membership
        </Button>
      </Form>
    </Container>
  
  
      <AdminFooter/>
    </div>
  );
};

export default AddMembership;
