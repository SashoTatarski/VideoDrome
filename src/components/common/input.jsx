import React from 'react';

const Input = ({ value, onChange, name, label, error }) => {
  return (
    <>
      <label data-testid='input' htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        error={error}
        type="text"
        className="form-control"
        autoFocus
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </>
  );
};

export default Input;
