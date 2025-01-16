import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
  const history = useHistory();

  const handleAddContact = () => {
    // Logic to add a contact
    // After adding, navigate to Home
    history.push('/');
  };

  const handleDeleteContact = () => {
    // Logic to delete a contact
    // After deleting, navigate to Home
    history.push('/');
  };

  return <p id="zero-state">Welcome to WiTech Contacts</p>;
}
