import React, { useState } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import AdminNavBar from '../../components/AdminNavBar';

const initialUserData = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    trainer: 'Mike Johnson',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    trainer: 'Sarah Lee',
  },
  {
    id: 3,
    name: 'Robert Brown',
    email: 'robert.brown@example.com',
    trainer: 'Chris Evans',
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    trainer: 'Anna White',
  },
  {
    id: 5,
    name: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    trainer: 'Rachel Green',
  },
];

const UserList = () => {
  const [users, setUsers] = useState(initialUserData);

  const handleDelete = (userId) => {
    const updatedUsers = users.filter(user => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleEdit = (userId) => {
    // Handle the edit logic here, e.g., opening a modal with a form
    console.log(`Edit user with ID: ${userId}`);
  };

  const handleAddTrainer = (userId) => {
    // Handle the add trainer logic here, e.g., opening a modal to assign a trainer
    console.log(`Add trainer for user with ID: ${userId}`);
  };

  return (
    <div>
        <AdminNavBar/>
        <Container className="mt-5">
      <h2 className="text-center mb-4">User List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Trainer Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.trainer}</td>
              <td>
                <Button
                  variant="warning"
                  className="me-2"
                  onClick={() => handleEdit(user.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="primary"
                  className="me-2"
                  onClick={() => handleAddTrainer(user.id)}
                >
                  Add Trainer
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(user.id)}
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

export default UserList;
