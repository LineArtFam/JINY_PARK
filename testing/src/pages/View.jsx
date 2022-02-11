import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const View = () => {
  return (
    <div>
      <h1>view page</h1>
      <Link to='/'>home</Link>
      <Link to='/write'>write</Link>
    </div>
  )
}

export default View