import React, { useRef } from 'react';

const Product = () => {
  const products = [
    { id: '1', name: 'Fashion', image: require('../Image/product1.png') },
    { id: '2', name: 'Electronics', image: require('../Image/product2.jpg') },
    { id: '3', name: 'Appliances', image: require('../Image/product34.jpg') },
    { id: '4', name: 'Repair', image: require('../Image/product34.jpg') },
    { id: '5', name: 'Home', image: require('../Image/product5.jpg') },
    { id: '6', name: 'Grooming', image: require('../Image/product6.jpg') },
    { id: '7', name: 'Home', image: require('../Image/product7.png') },
    { id: '8', name: 'Travel', image: require('../Image/product8.jpg') },
    { id: '9', name: 'Repair', image: require('../Image/product5.jpg') },
    { id: '10', name: 'Vegetables', image: require('../Image/product10.jpg') },
    { id: '11', name: 'Grocery', image: require('../Image/product11.jpg') },
    { id: '12', name: 'Self jobs', image: require('../Image/product12.jpg') },
    { id: '13', name: 'Vehicle care', image: require('../Image/product13.jpg') },
    { id: '14', name: 'Food', image: require('../Image/product14.jpg') },
    { id: '15', name: 'Repair', image: require('../Image/product15.jpg') },
    // Add more products as needed
  ];

    // Create a ref for the product list container
    const productListRef = useRef(null);

  
    return (
      <div style={{ marginTop: '10px', overflowX: 'auto' }}>

  
        {/* Product list container */}
        <div style={styles.productList} ref={productListRef}>
          {products.map((product) => (
            <div key={product.id} style={styles.productContainer}>
              <img src={product.image} alt={product.name} style={styles.productImage} />
              <p style={styles.productName}>{product.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

const styles = {
    productList: {
        display: 'flex',
        whiteSpace: 'nowrap',
      },
    productContainer: {
        width: '120px',
        margin: '10px',
        textAlign: 'center',
        display: 'inline-block',
    },

    productImage: {
    width: '80px',
    height: '80px',
    borderRadius: '8px',
    },
    productName: {
    marginTop: '5px',
    color: 'black',
    },
};

export default Product;
