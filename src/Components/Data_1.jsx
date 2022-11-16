import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../Components/data1.module.css'

const Data_1 = ({ formData, setFormData }) => {
  return (
    <div><h2>USER INFORMATION</h2>
    <div className={styles.container}>
      <div className={styles.left}>
        <input 
        type="text"
        placeholder='First name'
        value={formData.firstName}   
        onChange={(e) => setFormData({...formData, firstName: e.target.value})} 
        />
        <br />
        <br />
        <input 
        type="text"
        placeholder='Last name'
        value={formData.lastName}   
        onChange={(e) => setFormData({...formData, lastName: e.target.value})} 
        />
        <br />
        <br />
        <input 
        type="email"
        placeholder='email'
        value={formData.email}   
        onChange={(e) => setFormData({...formData, email: e.target.value})} 
        />
        <br />
        <br />
        <input 
        type="number"
        placeholder='age'
        value={formData.age}   
        onChange={(e) => setFormData({...formData, age: e.target.value})} 
        />
        <br />
        <br />
        <input 
        type="number"
        placeholder='hight'
        value={formData.hight}   
        onChange={(e) => setFormData({...formData, hight: e.target.value})} 
        />
        <br />
        <br />
        <label htmlFor="">Gender</label><br />
        <input type="radio" name='gender' id='male' value={formData.male} 
           onChange={(e) => setFormData({...formData, gender: e.target.value})} 
          />
           <label htmlFor="">male</label>
          <input type="radio" name='gender' id='female' value={formData.female} 
           onChange={(e) => setFormData({...formData, gender: e.target.value})} 
          />
          <label htmlFor="">female</label>
        </div>


        <div className={styles.left}>
        <input 
        type="text"
        placeholder='middle name'
        value={formData.middleName}   
        onChange={(e) => setFormData({...formData, middleName: e.target.value})} 
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
        <input 
        type="date" 
        id='birthday' 
        value={formData.birthday}
        onChange={(e) => setFormData({...formData, birthday: e.target.value})}
         />
         <br />
         <br />
         <select name="bloodGroup" id="bloodGroup" value={formData.bloodGroup}
         onChange={(e) => setFormData({...formData, bloodGroup: e.target.value})}
          >
          <option value="">select</option>
          <option value="a">A+</option>
          <option value='b'>B+</option>
          <option value='o'>O+</option>
          <option value='ab'>AB+</option>
         </select>
         <br />
          <br />
          <input 
          type="number"
          placeholder='weight'
          value={formData.weight}   
          onChange={(e) => setFormData({...formData, weight: e.target.value})} 
          />
          <br />
          <br />
          </div>
    </div>
    </div>
  )
}

export default Data_1