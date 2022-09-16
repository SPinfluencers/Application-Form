import React from 'react'

const Data_2 = ({ formData, setFormData }) => {
  return (
    <div>
        <h2 style={{color:'white'}}>College Details</h2>
        <input 
        type="text"
        placeholder='College Name'
        value={formData.college}   
        onChange={(e) => setFormData({...formData, college: e.target.value})} 
        />
        <br />
        <br />
        <input 
        type="text"
        placeholder='Branch'
        value={formData.branch}   
        onChange={(e) => setFormData({...formData, branch: e.target.value})} 
        />
        <br />
        <br />

    </div>
  )
}

export default Data_2