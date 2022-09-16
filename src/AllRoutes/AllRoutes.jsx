import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Details from '../Components/Details'
import Form from '../Components/Form'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/form' element={<Form />}></Route>
            <Route path='/details' element={<Details />}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes