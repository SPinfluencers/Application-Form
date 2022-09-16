import React from 'react'
import { NavLink } from 'react-router-dom';

const Details = () => {
  const [info, setInfo] = React.useState([]);

  React.useEffect(() => {
    let info = JSON.parse(localStorage.getItem('info'));
    if (info) {
      setInfo(info);
    }
  }, []);

  console.log(info)
  
  return (
    <div>
    <div style={{border:'1px solid none', backgroundColor:'teal', padding:'2%'}}>
        <h1 style={{color:'white'}}>Form Details</h1>
        <h3 style={{color:'white'}}>First Name - {info[0]}</h3>
        <h3 style={{color:'white'}}>Last Name - {info[1]}</h3>
        <h3 style={{color:'white'}}>Mobile Number - {info[2]}</h3>
        <h3 style={{color:'white'}}>College - {info[3]}</h3>
        <h3 style={{color:'white'}}>Branch - {info[4]}</h3>
        <h3 style={{color:'white'}}>Country - {info[5]}</h3>
        <h3 style={{color:'white'}}>State - {info[6]}</h3>
        <h3 style={{color:'white'}}>City - {info[7]}</h3>
    </div>
    <button>Download Pdf</button><br /><br />
    <NavLink style={{color:"blue"}} to='/'>GO TO FORM</NavLink>
    </div>
  )
}

export default Details