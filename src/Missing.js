import React from 'react';
import { Link } from 'react-router-dom';
const Missing = () => {
  return (
    <main className='Missing'>
      <h2>Page not found</h2>
      <p>well disapointing </p>
      <p>
        <Link to='/' >Visit our home page</Link>
      </p>
    </main>
  )
}

export default Missing;