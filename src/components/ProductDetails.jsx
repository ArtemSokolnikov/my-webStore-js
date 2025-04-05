import Button from '@mui/material/Button';
import React, { useState } from 'react';
import img1 from '../images/product_large.png';
import '../styles/ProductDetailsStyles.css';


const ProductDetails = ({
  setViewCard,
  choosedProduct,
  updateProductList,
  setViewCleanCard,
}) => {

  const [isItem, setItem] = useState({
    id: choosedProduct.id,
    name: choosedProduct.name,
    price: choosedProduct.price,
    description: choosedProduct.description,
  });


  const handleSaveDetails = () => {
    if (!choosedProduct.id) {
      setItem(prev => ({ ...prev, id: Math.floor(Math.random() * 1000) }))
      updateProductList(isItem, true)
    } else {
      updateProductList(isItem, false)
    }

  }

  const handleChangeInput = (e) => {
    e.preventDefault();
    let newItem = { ...isItem }
    newItem[e.target.name] = e.target.value
    setItem(newItem)
  }

  return (
    <div className='card-container'>
      <div className='content-image'>
        <img src={img1} alt='product-image' className='product-image-large' />
      </div>
      <div className='content-large'>
        <Button
          variant='contained'
          className='btn-back'
          onClick={() => { setViewCard(false); setViewCleanCard(false) }}
        >
          Close
        </Button>
        <div className='collectionOfInputs'>
          <input className='name' type="text" name='name' value={isItem.name} onChange={handleChangeInput} />
          <input className='price' type="number" name='price' value={isItem.price} onChange={handleChangeInput} />
          <input className='description' type="text" name='description' value={isItem.description} onChange={handleChangeInput} />
        </div>
        <Button className='btn-add-product' variant='contained' onClick={handleSaveDetails}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default ProductDetails;
