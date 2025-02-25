import React from 'react'
import { Link } from 'react-router-dom';
import products from '../Data/products.json';

const Home = () => {
  return (
    <div className='p-4'>
        <div className='bg-blue-500 text-white p-10 text-center text-2xl font-bold'>
            Welcome to Our Store
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6'>
            {products.slice(0,3).map((product) => (
                <div key={product.id} className='border p-4 rounded shadow'>
                    <img src={product.image} alt={product.title} className='w-full h-40 objecct-cover'/>
                    <h2 className='text-lg font-semibold mt-2'>{product.title}</h2>
                    <p className='text-sm text-gray-600'>${product.price}</p>
                </div>
                ))}
        </div>
        <div className='text-centrer mt-6'>
            <Link to='/products' className='bg-blue-600 text-white px-4 py-2 rounded'>
            View All Products
            </Link>
        </div>
    </div>
  )
}

export default Home