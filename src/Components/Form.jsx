import React from 'react'
import Data_1 from './Data_1'
import Data_2 from './Data_2'
import Data_3 from './Data_3'
import style from './form.css'
import  { NavLink, useNavigate }  from 'react-router-dom'

const Form = () => {
const [page, setPage] = React.useState(0)
const [formData, setFormData] = React.useState({
  // DATA-1
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  hight: '',
  middleName: '',
  mobile: "",
  birthday: '',
  bloodGroup: '',
  weight: '',
  gender: '',

  // DATA-2
  address1: '',
  address2: '',
  country_state: '',
  city: '',
  country: '',
  pin_code: '',

  // DATA-3
  skills: '',
  language: '',

})

let navigate = useNavigate()

const FormTitles = ["Data_1", "Data_2", "Data_3"];

const pages = () => {
  if(page === 0) {
    return <Data_1 formData={formData} setFormData={setFormData}/>
  }
  else if(page === 1) {
    return <Data_2 formData={formData} setFormData={setFormData}/>
  }
  else {
    return <Data_3 formData={formData} setFormData={setFormData}/>
  }
}

  return (
    <div>

       <div className='form'>{pages()}</div>
       
       <div >
       <button style={{marginRight: '10px'}} disabled={page == 0} onClick={() =>{setPage((currPage) => currPage - 1)}}>Prev</button>

       <button onClick={() => {if(page === FormTitles.length - 1) {
        alert('form submitted')
        const info = Object.values(formData);
        // console.log(info)
        localStorage.setItem('info', JSON.stringify(info));
        navigate('/details')
       } else {
        setPage((currPage) => currPage + 1)
       }}}  >
        {page === FormTitles.length - 1 ? "Submitted" : "Next"}
       </button>
       </div>
       <br />
       <br />
       <NavLink style={{color:"blue"}} to='/details'>GO TO FORM  DETAILS</NavLink>
    </div>
  )
}

export default Form 