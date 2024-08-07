import { useState } from 'react';
import styles from './AddToCardButton.module.css';


function AddToCardButton({ onClick }) {
  const [state, setState] = useState('normal');


  const handleClick = (e) => {
    setState('added');


    if (onClick) {
      onClick(e);
    }
    setTimeout(() => setState('normal'), 2000);
  };

  return (
    <button
      className={`${styles.AddToCardButton} ${state === 'added' ? styles.addedState : ''}`}
      onClick={handleClick}
    >
      {state === 'added' ? 'Added' : 'Add to cart'}
      </button>
  );
}

export default AddToCardButton;
