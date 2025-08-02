import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo.jsx';
import EducationalExperience from './components/EducationalExperience.jsx'
import PracticalExperience from './components/PracticalExperience.jsx';
import './App.css'

function App() {
  const [isEditingCV, setIsEditingCV] = useState(true)
  const [cvData, setCvData] = useState({
    general: {name: "", email: "", phoneNumber:""},
    education: {schoolName: "", studyTitle: "", date:""},
    experience: {companyName: "", positionTitle: "", mainResponsibilities:"", fromDate:"", toDate:""}
  });

  function updateSection(section, newData) {
    setCvData((prev) => ({
      ...prev,
      [section] : newData
    }));
  };
  

  return (
    
    <>
      <h2>{isEditingCV ? "Edit Your CV" : cvData.general.name + "'s " +"CV"}</h2>
      <GeneralInfo 
        data={cvData.general}
        isEditing={isEditingCV}
        onDataChange={(data) => updateSection('general', data)}
      />
      <br/>
      <EducationalExperience
        data={cvData.education}
        isEditing={isEditingCV}
        onDataChange={(data) => updateSection('education', data)}
      />
      <PracticalExperience
        data={cvData.experience}
        isEditing={isEditingCV}
        onDataChange={(data) => updateSection('experience', data)}
      />

      <button onClick={() => setIsEditingCV(!isEditingCV)}>
        {isEditingCV ? 'Save CV' : 'Edit CV'}
      </button>
    </>
  )
}

export default App
