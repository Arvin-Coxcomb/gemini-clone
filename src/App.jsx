import React, { useEffect } from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import run from './config/gemini';

const App = () => {

  return (
    <>
     <Sidebar />
     <Main/>
    </>
  )
}

export default App;