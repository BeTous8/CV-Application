import React, { useState } from 'react';


export default function GeneralInfo({data, isEditing, onDataChange}) {
    
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const newData = {
            ...data,
            [name] : value
        }
        onDataChange(newData)
        ;
    };
  return (
    <div className="general-info">
      <h3>General Information</h3>
        {isEditing ? (
        <form>
            <label>Name:</label>
            <input 
                type="text" 
                name="name"
                value={data.name} 
                onChange={handleInputChange} 
            />
            <label>Email Address:</label>
            <input 
                type="email" 
                name="email"
                value={data.email}
                onChange={handleInputChange}
            />
            <label>Phone Number:</label>
            <input 
                type="tel" 
                name="phoneNumber"
                value={data.phoneNumber}
                onChange={handleInputChange}
            />
        </form>
        ) : (
            <div>
                <p>Name: {data.name}</p>
                <p>Email Address: {data.email}</p>
                <p>Phone Number: {data.phoneNumber}</p>
            </div>
            )}
      <hr />
      <button onClick={() => onDataChange({ name: '', email: '', phoneNumber: '' })}>
                Reset   
            </button>
        
        

    </div>
    
  );
}