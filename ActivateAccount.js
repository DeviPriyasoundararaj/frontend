import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ActivateAccount = () => {
  const { token } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const activateAccount = async () => {
      try {
        await axios.get(`/api/auth/activate/${token}`);
        setMessage('Account activated successfully');
      } catch (error) {
        setMessage('Activation failed');
      }
    };

    activateAccount();
  }, [token]);

  return (
    <div>
      <h2>Activate Account</h2>
      <p>{message}</p>
    </div>
  );
};

export default ActivateAccount;
