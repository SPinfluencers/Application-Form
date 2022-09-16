import React from 'react'

const Data_3 = ({ formData, setFormData }) => {
  return (
    <div>
        <h2 style={{color:'white'}}>Location Information</h2>
        <input 
        type="text"
        placeholder='Country'
        value={formData.country}   
        onChange={(e) => setFormData({...formData, country: e.target.value})} 
        />
        <br />
        <br />

        <input 
        type="text"
        placeholder='State'
        value={formData.state}   
        onChange={(e) => setFormData({...formData, state: e.target.value})} 
        />
        <br />
        <br />

        <input 
        type="text"
        placeholder='City'
        value={formData.city}   
        onChange={(e) => setFormData({...formData, city: e.target.value})} 
        />
        <br />
        <br />

    </div>
  )
}

export default Data_3