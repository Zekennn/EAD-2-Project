import React, { useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import AdminNavBar from '../../components/AdminNavBar';

const initialTrainerData = [
  {
    id: 1,
    name: 'Mike Johnson',
    email: 'mike.johnson@example.com',
    gender: 'Male',
  },
  {
    id: 2,
    name: 'Sarah Lee',
    email: 'sarah.lee@example.com',
    gender: 'Female',
  },
  {
    id: 3,
    name: 'Chris Evans',
    email: 'chris.evans@example.com',
    gender: 'Male',
  },
  {
    id: 4,
    name: 'Anna White',
    email: 'anna.white@example.com',
    gender: 'Female',
  },
  {
    id: 5,
    name: 'Rachel Green',
    email: 'rachel.green@example.com',
    gender: 'Female',
  },
];

const TrainerList = () => {
  const [trainers, setTrainers] = useState(initialTrainerData);

  const handleDelete = (trainerId) => {
    const updatedTrainers = trainers.filter(trainer => trainer.id !== trainerId);
    setTrainers(updatedTrainers);
  };

  const handleEdit = (trainerId) => {
    // Handle the edit logic here, e.g., opening a modal with a form
    console.log(`Edit trainer with ID: ${trainerId}`);
  };

  return (
    <div>
        <AdminNavBar/>
        <Container className="mt-5">
      <h2 className="text-center mb-4">Trainer List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Trainer ID</th>
            <th>Trainer Name</th>
            <th>Trainer Email</th>
            <th>Trainer Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trainers.map(trainer => (
            <tr key={trainer.id}>
              <td>{trainer.id}</td>
              <td>{trainer.name}</td>
              <td>{trainer.email}</td>
              <td>{trainer.gender}</td>
              <td>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => handleEdit(trainer.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(trainer.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    </div>
  );
};

export default TrainerList;
