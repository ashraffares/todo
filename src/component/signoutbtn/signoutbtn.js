import React from 'react';
import { useHistory } from 'react-router-dom';

const SignOutBtn = () => {
  const history = useHistory();
  const handleSignOut = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <button type="button" onClick={handleSignOut()}>Sign Out</button>
  );
};

export default SignOutBtn;
