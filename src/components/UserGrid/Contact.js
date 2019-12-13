import React from 'react';
import styled from 'styled-components'

const ContactComp = styled.div`
  display: flex;
  padding: 0 0 20px 0;
`
const Contact = ({ user }) => {
  
  const handleContactClick = (e) => {
    console.log('Clicked!');
    const selectedUser = e.currentTarget;
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
    </ContactComp>
  );
};

export default Contact;