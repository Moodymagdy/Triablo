import React from 'react'






export default function Products() {

    // Replace the following with your actual product image URLs
    const productsData = [
      { image: './bag.jpg', description: 'Eastpak Padded PakR', price: '$25' },
      { image: './bag.jpg', description: 'Cayler And Sons Milano', price: '$40' },
      { image: './bag.jpg', description: 'Mi-Pac Floral Tapestry', price: '$30' },
      { image: './bag.jpg', description: 'Spiral Floral Backpack', price: '$50' },
      { image: './bag.jpg', description: 'Reclaimed Vintage African', price: '$64' },
      { image: './bag.jpg', description: 'Nike bag original', price: '$70' },
      { image: './bag.jpg', description: 'Adidas bag original', price: '$50' },
      { image: './bag.jpg', description: 'Adidas bag original', price: '$50' }


      // Add more product data
    ];

    
  return <>
  
  <div className="container mt-4">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {productsData.map((product, index) => (
          <div key={index} className="col-md-3 mb-4">
            <div className="text-center">
              <img
                src={product.image}
                className="img-fluid"
                alt={`Product ${index + 1}`}
                style={{ width: '200px', height: '150px' }}
              />
              <div className="mt-2">
                <p style={{ display: 'inline-block', marginRight: '10px' }}>{product.price}</p>
                <p style={{ display: 'inline-block' }}>{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  
              </>
      }

