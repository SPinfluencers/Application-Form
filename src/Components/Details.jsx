import React from 'react'

const Details = () => {
  const [info, setInfo] = React.useState([]);

  React.useEffect(() => {
    let info = JSON.parse(localStorage.getItem('info'));
    if (info) {
      setInfo(info);
    }
  }, []);

  // console.log(info)
  
  return (
    <div>
        <h1>Welcome to Details</h1>
        {info.map((item) => {
          return <h1>{item.firstName}</h1>
        })}
    </div>
  )
}

export default Details