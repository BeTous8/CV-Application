import React, {useState} from "react";

export default function PracticalExperience({companyName, positionTitle, mainResponsibilities, fromDate, toDate}) {
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        companyName : companyName,
        positionTitle : positionTitle,
        mainResponsibilities : mainResponsibilities,
        fromDate : fromDate,
        toDate : toDate
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    return (
        <div>
            <h3>Practical Experience</h3>
            
            {isEditing ? 
                <form>
                    <label>Company Name:</label>
                    <input 
                    type="text"
                    name='companyName'
                    value={formData.companyName}
                    onChange={handleInputChange}
                    />
                    <label>Position Title:</label>
                    <input 
                    type="text"
                    name='positionTitle'
                    value={formData.positionTitle}
                    onChange={handleInputChange}
                    />
                    {/* <br/> */}
                    <label>Main Responsibilities:</label>
                    <textarea 
                    name='mainResponsibilities'
                    value={formData.mainResponsibilities}
                    rows='4'
                    placeholder="• Managed team of 5 developers
                            - Led project planning and implementation
                            - Improved system performance by 30%"
                    onChange={handleInputChange}
                    />
                    <label>From Date:</label>
                <input
                    type='date'
                    name="fromDate"
                    value={formData.fromDate}
                    onChange={handleInputChange}
                />
                <label>To Date:</label>
                <input
                    type='date'
                    name="toDate"
                    value={formData.toDate}
                    onChange={handleInputChange}
                />
                </form>
                


            : 
            <div>
                <p>company Name: {formData.companyName}</p>
                <p>position title: {formData.positionTitle}</p>
                <p>main responsibilities: {formData.mainResponsibilities}</p>
                <p>From Date: {formData.fromDate}</p>
                <p>To Date: {formData.toDate}</p>
            </div>
             }

             <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Save" : "Edit"}
             </button>
             <button onClick={() => setFormData({companyName: "", positionTitle: "", mainResponsibilities: "", fromDate: "", toDate: ""})}>Clear</button>
        </div>
        
    )

}