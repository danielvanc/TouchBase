import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../../Modal';


const ContactComp = styled.div`
  display: flex;
  padding: 0 0 20px 0;
`

const Contact = ({ user }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({"user": "details here"})
  
  const handleContactClick = (e) => {
    console.log('Clicked!');
    const selectedUser = e.currentTarget;

    setModalOpen(!modalOpen);
    setUserDetails(user)
  }

  return (
    <ContactComp data-userid={user.id} onClick={handleContactClick} key={user.username}>
      <img
        alt={user.username}
        src={user.photo}
        style={{
          borderRadius: '50%',
          height: 72,
          marginRight: 20,
          width: 72,
        }}
      />
      <div>
        <h2 style={{ marginTop: 0 }}>
          @{user.username}
        </h2>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <button type="button">Details</button>
      </div>
      {
        modalOpen && (
          <Modal>
            {userDetails.username}
          </Modal>
        )
      }
    </ContactComp>
  );
};

export default Contact;