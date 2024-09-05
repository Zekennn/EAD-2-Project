import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmDeleteModal = ({selectedMembershipName}) => {
  return (
    <Modal  centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Are you sure you want to delete the membership "${selectedMembershipName}"?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" >
          No
        </Button>
        <Button variant="danger" >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmDeleteModal;
