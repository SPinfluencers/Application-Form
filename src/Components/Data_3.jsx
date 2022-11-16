import React from 'react'

const Data_3 = ({ formData, setFormData }) => {
  return (
    <div>
        <h2 style={{color:'black'}}>SKLLS</h2>

        
        <select name="skills" id="skills" value={formData.skills}
         onChange={(e) => setFormData({...formData, skills: e.target.value})}
          >
          <option value="">select skills</option>
          <option value="html">HTML</option>
          <option value='css'>CSS</option>
          <option value='javascript'>JAVASCRIPT</option>
          <option value='react'>REACT</option>
          <option value='redux'>REDUX</option>
         </select>
        <br />
        <br />

        
        <select name="language" id="language" value={formData.language}
         onChange={(e) => setFormData({...formData, language: e.target.value})}
          >
          <option value="">select language</option>
          <option value="english">ENGLISH</option>
          <option value='hindi'>HINDI</option>
          <option value='marathi'>MARATHI</option>     
         </select>

        <br />
        <br />

    </div>
  )
}

export default Data_3