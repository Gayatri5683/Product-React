import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-blue-500 text-white p-4 flex justify-between'>
        <h1 className='text-xl font-bold'>Product Listing</h1>
        <nav>
            <Link to={'/'} className='mr-4'>Home</Link>
            <Link to={'/products'}>Products</Link>
        </nav>
    </header>
  )
}

export default Header