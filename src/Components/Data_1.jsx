import React from 'react'
import { NavLink } from 'react-router-dom'

const Data_1 = ({ formData, setFormData }) => {
  return (
    <div>
        <h2 style={{color:'white'}}>Personal Information</h2>
        <input 
        type="text"
        placeholder='First Name'
        value={formData.firstName}   
        onChange={(e) => setFormData({...formData, firstName: e.target.value})} 
        />
        <br />
        <br />
        <input 
        type="text"
        placeholder='Last Name'
        value={formData.lastName}   
        onChange={(e) => setFormData({...formData, lastName: e.target.value})} 
        />
        <br />
        <br />
        <input 
        type="number"
        placeholder='Mobile No'
        value={formData.mobile}   
        onChange={(e) => setFormData({...formData, mobile: e.target.value})} 
        />
        <br />
        <br />

    </div>
  )
}

export default Data_1