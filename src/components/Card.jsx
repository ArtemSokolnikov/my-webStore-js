import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import productIcon from '../images/product.png';
import '../styles/CardStyles.css';
import { useDispatch } from 'react-redux';
import { removeProduct, setSelectedProduct } from '../store/productListSlice';

const Card = ({
  product,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { creationDate, id, name, price, description } = product||{};

  const formattedDate = new Date(creationDate).toLocaleString("en-EN");

  const handleOpenDetails = () => {
    dispatch(setSelectedProduct({ value: product }));
    navigate(`/product/${id}`)
  }
  const handleRemoveProduct = (id) => {
    dispatch(removeProduct({ id }))
  };
  return (
    <div className="cardItem" data-testid="card" role="listitem">
      <div
        className='product-card'
        onClick={handleOpenDetails}
      >
        <img src={productIcon} alt='Product' className='product-image' />
        <div className='content' >
          <div className='name'>{name}</div>
          <div className='price'>{price}$</div>
          <div className='description'>{description}...</div>
          <div className='date'>{formattedDate}</div>
        </div>
      </div>
      <div className='coupleOfbutton'>
        <Button className='' variant='outlined' onClick={() => handleRemoveProduct(id)}>
          remove
        </Button>
      </div>
    </div>
  );
};

export default Card;
