import React from 'react';
import { Route, Routes } from 'react-router-dom';

import BemForm from '../Forms/BemForm';

const ContentContainer = () => {
  return (
    <>
      <Routes>
        <Route path='' element={<BemForm />}></Route>
      </Routes>
    </>
  )
}

export default ContentContainer;