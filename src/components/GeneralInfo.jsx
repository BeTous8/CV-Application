import React, { useState } from 'react';


export default function GeneralInfo({name, email, phoneNumber}) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: name,
        email: email,
        phoneNumber: phoneNumber
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
  return (
    <div className="general-info">
      <h1>General Information</h1>
        {isEditing ? (
        <form>
            <label>Name:</label>
            <input 
                type="text" 
                name="name"
                value={formData.name} 
                onChange={handleInputChange} 
            />
            <label>Email Address:</label>
            <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
            />
            <label>Phone Number:</label>
            <input 
                type="tel" 
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
            />
        </form>
        ) : (
            <div>
                <p>Name: {formData.name}</p>
                <p>Email Address: {formData.email}</p>
                <p>Phone Number: {formData.phoneNumber}</p>
            </div>
            )}
      <hr />
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
        <button onClick={() => setFormData({ name: '', email: '', phoneNumber: '' })}>
            Clear   
        </button>
        {isEditing && (
            <button onClick={() => setIsEditing(false)}>
            Back
        </button>
        )}
        
        

    </div>
    
  );
}