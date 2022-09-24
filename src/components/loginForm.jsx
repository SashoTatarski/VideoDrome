import React, { createRef, useEffect } from 'react';

const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the server
    console.log('Submitted');
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username"></label>
          <input
            autoFocus
            id="username"
            type="text"
            className="form-control"
          />
          Username
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input id="password" type="text" className="form-control" />
          Password
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
