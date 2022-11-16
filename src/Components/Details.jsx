import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../Components/details.module.css'

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
    <div className={styles.details}>
      <h1>Data added successfully</h1>

    <div  className={styles.details_1}>  
        <div>
        <h3 >FIRST NAME - {info[0]}</h3>
        <h3 >LAST NAME - {info[1]}</h3>
        <h3 >EMAIL - {info[2]}</h3>
        <h3 >AGE - {info[3]}</h3>
        <h3 >HIGHT - {info[4]}</h3>
        <h3 >MIDDLE NAME - {info[5]}</h3>
        <h3 >MOBILE NUMBER - {info[6]}</h3>
        <h3 >BIRTHDAY - {info[7]}</h3>
        <h3> BLOOD GROUP - {info[8]}</h3>
        <h3 >WEIGHT - {info[9]}</h3>
        <h3 >GENDER - {info[10]}</h3>

        <h3 >ADDRESS-1 - {info[11]}</h3>
        <h3 >ADDRESS-2 - {info[12]}</h3>
        <h3 >STATE - {info[13]}</h3>
        <h3 >CITY - {info[14]}</h3>
        <h3>COUNTRY - {info[15]}</h3>
        <h3 >PIN-CODE - {info[16]}</h3>

        <h3 >SKILLS - {info[17]}</h3>
        <h3 >LANGUAGE - {info[18]}</h3>
        </div>
    </div>
    <br />
    <NavLink style={{color:"blue"}} to='/'>GO TO FORM</NavLink>
    </div>
  )
}

export default Details