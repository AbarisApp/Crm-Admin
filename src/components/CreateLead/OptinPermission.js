import React, { useState } from 'react';

const OptInForm = ({handleChange,optIns}) => {
  
  return (
    <form  className='row'>
      <div className='col-4'>
        <label>
          <input
            type="checkbox"
            name="whatsapp"
            checked={optIns.whatsapp}
            onChange={handleChange}
          />
          WhatsApp 
        </label>
      </div>
      <div className='col-4'>
        <label>
          <input
            type="checkbox"
            name="sms"
            checked={optIns.sms}
            onChange={handleChange}
          />
          SMS 
        </label>
      </div>
      <div className='col-4'>
        <label>
          <input
            type="checkbox"
            name="emailB"
            checked={optIns.emailB}
            onChange={handleChange}
          />
          Email Option
        </label>
      </div>
    </form>
  );
};

export default OptInForm;
