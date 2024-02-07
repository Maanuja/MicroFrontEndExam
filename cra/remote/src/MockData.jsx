import axios from 'axios';
import React, { useState, useEffect } from 'react';

const MockData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    axios
      .get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default MockData;
