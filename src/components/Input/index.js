import React, { useState } from 'react';
import './styles.css';

const Input = ({state, placeholder, setState, label, type}) => {
  return (
    <div className='input-wrapper'>
        <p className='label'>{label}</p>
        <input 
            type={type}
            value={state}
            placeholder={placeholder}
            onChange={(e) => setState(e.target.value)}
            className='custom-input'
        >
        </input>
        <div className='line-div'></div>
    </div>
  )
}

export default Input