import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  return (
    <form>
      <div>
        <label htmlFor="email">
          Email:
          <input type="text" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input type="text" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>
      <div>
        <label htmlFor="password_confirmation">
          Password_confirmation:
          <input type="text" placeholder="Password_confirmation" id="password_confirmation" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
