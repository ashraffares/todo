import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form>
      <div>
        <label htmlFor="email">
          Email:
          <input type="text" placeholder="Email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>

      <div>
        <label htmlFor="password">
          Password:
          <input type="text" placeholder="Password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SignIn;
