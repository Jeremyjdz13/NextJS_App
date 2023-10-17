import React from 'react'
import AddToCart from '../AddToCart'
import styles from './ProductCard.module.css'


const ProductCard = () => {
  return (
    <div className={styles.card}>
      Tailwind CSS
      <div 
        // className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-200'
        >
        <AddToCart />
      </div>
        
    </div>
  )
}

export default ProductCard