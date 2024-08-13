import React from 'react';
import Title from './components/Header/Title';
import BemForm from './components/Forms/BemForm';

const App = () => {
  return (
    <>
      <div className='bem-app'>
        <div className='bem-app-header'>
          <Title />
        </div>
        <div className='bem-app-form'>
          <BemForm />
        </div>
      </div>
    </>
  )
}
  
export default App;