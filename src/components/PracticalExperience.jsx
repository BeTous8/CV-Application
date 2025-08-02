import React, {useState} from "react";

export default function PracticalExperience({data, isEditing, onDataChange}) {
    

    const handleInputChange = (e) => {
        const {name, value} = e.target
        const newData = {
            ...data,
            [name] : value
        }
        onDataChange(newData)
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
                    value={data.companyName}
                    onChange={handleInputChange}
                    />
                    <label>Position Title:</label>
                    <input 
                    type="text"
                    name='positionTitle'
                    value={data.positionTitle}
                    onChange={handleInputChange}
                    />
                    {/* <br/> */}
                    <label>Main Responsibilities:</label>
                    <textarea 
                    name='mainResponsibilities'
                    value={data.mainResponsibilities}
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
                    value={data.fromDate}
                    onChange={handleInputChange}
                />
                <label>To Date:</label>
                <input
                    type='date'
                    name="toDate"
                    value={data.toDate}
                    onChange={handleInputChange}
                />
                </form>
                


            : 
            <div>
                <p>company Name: {data.companyName}</p>
                <p>position title: {data.positionTitle}</p>
                <p>main responsibilities: {data.mainResponsibilities}</p>
                <p>From Date: {data.fromDate}</p>
                <p>To Date: {data.toDate}</p>
            </div>
             }

             
             <button onClick={() => onDataChange({companyName: "", positionTitle: "", mainResponsibilities: "", fromDate: "", toDate: ""})}>Reset</button>
        </div>
        
    )

}