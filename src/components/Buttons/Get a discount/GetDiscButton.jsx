import React, { useState } from 'react';
import styles from './GetDiscButton.module.css';

function GetDiscButton({ onClick, disabled }) {
  const [state, setState] = useState('normal');

  const handleClick = (e) => {
    if (disabled) return;

    setState('added');
    if (onClick) {
      onClick(e);
    }
    setTimeout(() => setState('normal'), 2000);
  };

  return (
    <button
      className={`${styles.getDiscButton} ${state === 'added' ? styles.addedState : ''} ${disabled ? styles.disabled : ''}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {state === 'added' ? 'Request Submitted' : 'Get a discount'}
    </button>
  );
}

export default GetDiscButton;
