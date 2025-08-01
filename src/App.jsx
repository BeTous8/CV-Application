import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo.jsx';
import EducationalExperience from './components/EducationalExperience.jsx'
import PracticalExperience from './components/PracticalExperience.jsx';
import './App.css'

function App() {
  

  return (
    <>
      <GeneralInfo 
        name="John Doe"
        email="John_Doe@gmail.com"
        phoneNumber="123-456-7890"
      />
      <br/>
      <EducationalExperience
        schoolName="UCSD"
        studyTitle="Computer Engineering"
        date=""
      />
      <PracticalExperience
        companyName = 'Sony'
        positionTitle= 'fronEnd developer'
        mainResponsibilities= ''
        fromDate= ''
        toDate= ''
      />
    </>
  )
}

export default App
