import React, { useState } from 'react';

const BemForm = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBMI = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter valid Weight and Height");
    } else {
      let bmi = (weight / (height * height) * 703);
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("You are Underweight");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are a Healthy weight person");
      } else {
        setMessage("You are Overweight");
      }
    }
  };


  let reload = () => {
    window.location.reload();
  }

  return (
    <>
      <form onSubmit={calcBMI}>
        <div>
          <label>Weight (ibs)</label>
          <input type='text' placeholder='Enter Weight Value' value={weight} onChange={(e) => setWeight(e.target.value)}></input>
        </div>

        <div>
          <label>Height (in)</label>
          <input type='text' placeholder='Enter Height Value' value={height} onChange={(e) => setHeight(e.target.value)}></input>
        </div>

        <div>
          <button type='submit' className='btn'>Submit</button>
          <button type='submit' className='btn btn-outline' onClick={reload}>Reload</button>
        </div>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </>
  )
}

export default BemForm;