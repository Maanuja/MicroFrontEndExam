import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Ul = styled('ul')`
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Contact = styled('li')`
  border-radius: 16px;
  background-color: #eee;
  text-align: center;
  padding: 16px;
  font-family: 'Oswald', sans-serif;

  li {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  table {
    text-align: left;
    margin-top: 12px;
  }
`;

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    axios
      .get(apiUrl)
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <h2>Contacts</h2>
      <Ul>
        {contacts.map(contact => (
          <Contact key={contact.id}>
            <span>
              <b>{contact.name}</b>
            </span>
            <table>
              <tr>
                <th>Mail :</th>
                <td>{contact.email}</td>
              </tr>
              <tr>
                <th>Phone :</th>
                <td>{contact.phone}</td>
              </tr>
              <tr>
                <th>Website :</th>
                <td>{contact.website}</td>
              </tr>
            </table>
          </Contact>
        ))}
      </Ul>
    </>
  );
};

export default Contacts;
