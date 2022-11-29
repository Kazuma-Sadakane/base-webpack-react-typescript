import {useState} from 'react';
import Image from '../assets/images/image.png';
import {Button} from './components';
import {TextField} from './components/TextField/TextField';
export const App = () => {
  const [number, setNumber] = useState(0);
  const handleClick = () => {
    setNumber(prev => prev + 1);
  };
  return (
    <>
      <h1>{number}</h1>
      <Button onClick={handleClick} label="btn" />
      <img src={Image} alt="" />
      <TextField style={{backgroundColor: 'red'}} helperText="error" />
    </>
  );
};
