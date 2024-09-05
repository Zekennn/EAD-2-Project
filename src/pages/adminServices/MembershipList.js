
import React from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import AdminNavBar from '../../components/AdminNavBar';
import ConfirmDeleteModal from '../../components/ConfirmDeleteMembership';
import AdminFooter from '../../components/FooterAdmin';
const membershipData = [
  { 
    id: '001',
    name: 'Basic Membership',
    types: 'Monthly, Yearly',
    pricing: '$30/month or $300/year',
    facilities: 'Access to gym equipment, locker room',
    services: '1 free personal training session',
    cancellation: 'Cancel anytime with 30 days notice',
  },
  { 
    id: '002',
    name: 'Standard Membership',
    types: 'Monthly, Yearly',
    pricing: '$50/month or $500/year',
    facilities: 'Access to gym equipment, locker room, group fitness classes',
    services: '3 free personal training sessions, nutrition consultation',
    cancellation: 'Cancel anytime with 30 days notice',
  },
  { 
    id: '003',
    name: 'Premium Membership',
    types: 'Monthly, Yearly',
    pricing: '$70/month or $700/year',
    facilities: 'Access to gym equipment, locker room, group fitness classes, pool',
    services: '5 free personal training sessions, nutrition consultation, free merchandise',
    cancellation: 'Cancel anytime with 30 days notice',
  },
  { 
    id: '004',
    name: 'Family Membership',
    types: 'Monthly, Yearly',
    pricing: '$120/month or $1200/year',
    facilities: 'Access to gym equipment, locker room, group fitness classes, pool, family lounge',
    services: '10 free personal training sessions, family nutrition consultation',
    cancellation: 'Cancel anytime with 30 days notice',
  },
  { 
    id: '005',
    name: 'VIP Membership',
    types: 'Monthly, Yearly',
    pricing: '$150/month or $1500/year',
    facilities: 'All-access pass, VIP locker room, private pool area, spa services',
    services: 'Unlimited personal training, private nutrition consultation, exclusive events',
    cancellation: 'Cancel anytime with 30 days notice',
  },
];
const handleDeleteButton = (MembershipName) => {
    
    <ConfirmDeleteModal selectedMembershipName = {MembershipName} />
  };
const MembershipList = () => {
  return (
    <div>
        <AdminNavBar/>
        <Container className="mt-5">
      <h2 className="text-center mb-4">Membership List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Membership Name</th>
            <th>Types of Memberships</th>
            <th>Pricing</th>
            <th>Facilities and Services</th>
            <th>Cancellation Policies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {membershipData.map((membership, index) => (
            <tr key={index}>
              <td>{membership.id}</td>
              <td>{membership.name}</td>
              <td>{membership.types}</td>
              <td>{membership.pricing}</td>
              <td>{membership.facilities}</td>
              <td>{membership.cancellation}</td>
              <td>
                <Button variant="warning" className="me-2">Edit</Button>
                <br/><br/>
                <Button variant="danger" onClick={() => handleDeleteButton(membership.name)} >Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    <AdminFooter/>
    </div>
    
  );
};

export default MembershipList;
