import React, {useState} from "react";

export default function EducationalExperience ({schoolName, studyTitle, date}) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(
        {
            schoolName : schoolName,
            studyTitle : studyTitle,
            date : date


        }
    )

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }


    return (
        <div>
            <h3>Educational Experience</h3>
            {isEditing ? 
            <form>
                <label>School Name</label>
                <input
                    type='text'
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleInputChange}
                />
                <input
                    type='text'
                    name="studyTitle"
                    value={formData.studyTitle}
                    onChange={handleInputChange}
                />
                <input
                    type='date'
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                />
            </form>
            : 
            <div>
                <p>school name: {formData.schoolName}</p>
                <p>title of study: {formData.studyTitle}</p>
                <p>date of study: {formData.date}</p>
            </div>
            }
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Save" : "Edit"}
            </button>
            <button onClick={() => setFormData({ name: '', email: '', phoneNumber: '' })}>
                Clear
            </button>
        </div>
    )
}