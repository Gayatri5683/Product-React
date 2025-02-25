import React from 'react';
import products from '../Data/products.json';

const Products = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-sm text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products