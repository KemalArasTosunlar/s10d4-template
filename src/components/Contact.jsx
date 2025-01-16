import React from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useContact, useDeleteContact } from '../services/tanStack';

export default function Contact() {
  const { contactId } = useParams();
  const history = useHistory();
  const { data: contact, isLoading } = useContact(contactId);
  const deleteContactMutation = useDeleteContact();

  const handleDelete = () => {
    deleteContactMutation.mutate(contactId, {
      onSuccess: () => {
        history.push('/');
      },
    });
  };

  if (isLoading) return 'loading';

  return (
    <div id="contact">
      <div>
        <img key={contact.avatar} src={contact.avatar || null} />
      </div>

      <div>
        <h1 data-testid="full_name">
          {contact.first_name || contact.last_name ? (
            <>
              {contact.first_name} {contact.last_name}
            </>
          ) : (
            <i>No Name</i>
          )}{' '}
        </h1>

        {contact.email && (
          <p>
            <a target="_blank" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
          </p>
        )}

        {contact.description && <p>{contact.description}</p>}

        <div>
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
