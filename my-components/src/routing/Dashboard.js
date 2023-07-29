import React from 'react'
import { useParams } from 'react-router-dom'

const Dashboard = () => {
  const {name} = useParams();
  return (
    <div>
      <h1>Dashboard Profile name is: {name}</h1>
    </div>
  )
}

export default Dashboard
