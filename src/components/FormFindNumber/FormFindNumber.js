import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './FormFindNumber.module.css';
import Alert from '@mui/material/Alert';
import {
  findMissingNumberUseSet,
  getArrayNumbersFromString,
} from './FormFindNumberHelpers';
const FormFindNumber = () => {
  const [inputValue, setInputValue] = useState('');
  const [showMissingNumber, setShowMissingNumber] = useState(false);
  const [answer, setAnswer] = useState('');

  const getMissingNumberFromArray = (event) => {
    event.preventDefault();
    if (inputValue === '') {
      setShowMissingNumber(true);
      setAnswer(
        <Alert variant='outlined' severity='warning'>
          Введите последовательность чисел
        </Alert>
      );
      return;
    }
    const ArrayFromInpit = getArrayNumbersFromString(inputValue);
    setAnswer(`Пропавшее число: ${findMissingNumberUseSet(ArrayFromInpit)}`);
    setShowMissingNumber(true);
    setInputValue('');
  };
  return (
    <form onSubmit={getMissingNumberFromArray} className={styles.form}>
      <TextField
        id='1'
        label='Введите последовательность чисел'
        variant='outlined'
        value={inputValue}
        sx={{ margin: '15px 0', display: 'flex' }}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant='outlined' type='submit'>
        Найти пропавшее число
      </Button>
      {showMissingNumber && <div className={styles.answer}> {answer}</div>}
    </form>
  );
};

export default FormFindNumber;
