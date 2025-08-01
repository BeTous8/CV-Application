import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo.jsx';
import './App.css'

function App() {
  

  return (
    <>
      <GeneralInfo 
        name="John Doe"
        email="John_Doe@gmail.com"
        phoneNumber="123-456-7890"
      />
    </>
  )
}

export default App
