import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
// import FormSuccess from './FormSuccess';
import Card from './Card';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <>
          {/* <FormSuccess /> */}
          <Card />
          </>
        )}
      </div>
    </>
  );
};

export default Form;
