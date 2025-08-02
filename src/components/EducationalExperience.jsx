import React, {useState} from "react";

export default function EducationalExperience ({data, isEditing, onDataChange}) {
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newData = {
            ...data,
            [name] : value
        }
        onDataChange(newData)
        
    };


    return (
        <div>
            <h3>Educational Experience</h3>
            {isEditing ? 
            <form>
                <label>School Name</label>
                <input
                    type='text'
                    name="schoolName"
                    value={data.schoolName}
                    onChange={handleInputChange}
                />
                <label>Study Title:</label>
                <input
                    type='text'
                    name="studyTitle"
                    value={data.studyTitle}
                    onChange={handleInputChange}
                />
                <label>Date:</label>
                <input
                    type='date'
                    name="date"
                    value={data.date}
                    onChange={handleInputChange}
                />
            </form>
            : 
            <div>
                <p>school name: {data.schoolName}</p>
                <p>title of study: {data.studyTitle}</p>
                <p>date of study: {data.date}</p>
            </div>
            }
            
            <button onClick={() => onDataChange({ name: '', email: '', phoneNumber: '' })}>
                Reset
            </button>
        </div>
    )
}