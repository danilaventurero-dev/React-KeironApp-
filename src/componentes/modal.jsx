import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import Modal from "react-bootstrap/Modal";

const ModalRs = () => {
    
    const solicitud = useSelector(store => store.ticket.edit.solicitud );
  return (
    <Modal show={solicitud}>
      <Modal.Header>Hi</Modal.Header>
      <Modal.Body>asdfasdf</Modal.Body>
      <Modal.Footer>This is the footer</Modal.Footer>
    </Modal>
  );
};

export default ModalRs;