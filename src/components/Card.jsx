import { Button } from '@mui/material';
import React from 'react';
import productIcon from '../images/product.png';
import '../styles/CardStyles.css';


const Card = ({
  product,
  handleChoosedProduct,
  handleRemoveProduct
}) => {

  return (
    <div className="cardItem">
      <div
        className='product-card'
        onClick={() => handleChoosedProduct(product)}
      >
        <img src={productIcon} alt='Product' className='product-image' />
        <div className='content'>
          <div className='name'>{product.name}</div>
          <div className='price'>{product.price}$</div>
          <div className='description'>{product.description}...</div>
        </div>
      </div>
      <div className='coupleOfbutton'>
        <Button className='' variant='outlined' onClick={()=>handleRemoveProduct(product.id)}>
          remove
        </Button>
      </div>
    </div>
  );
};

export default Card;
