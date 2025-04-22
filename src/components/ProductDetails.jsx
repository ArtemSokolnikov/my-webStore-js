import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import img1 from '../images/product_large.png';
import '../styles/ProductDetailsStyles.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createProduct, setIsCreating, setSelectedProduct, updateProduct } from '../store/productListSlice';
import { useSelector } from 'react-redux';
import { selectProductPropsCombined } from '../store/selectors';

const ProductDetails = ({
}) => {
  const dispatch = useDispatch();
  const { selectedStoreProduct, isCreating } = useSelector(selectProductPropsCombined);
  const [product, setProduct] = useState(selectedStoreProduct);

  const navigate = useNavigate();
  useEffect(() => {
    setProduct(selectedStoreProduct)
  }, [selectedStoreProduct])

  if (!product) return <div>Product not found</div>;

  const handleSaveProduct = () => {
    if (isCreating) {
      const timestamp = Date.now();
      const newProduct = { ...product, id: timestamp, creationDate: timestamp }
      setProduct(newProduct);
      dispatch(createProduct({ elem: newProduct }))
      dispatch(setIsCreating({ value: false }))
      navigate(`/`)
    } else {
      dispatch(updateProduct({ elem: product }))
      navigate(`/`)
    }
  }

  const handleChangeInput = (e) => {
    e.preventDefault();
    let newItem = { ...product }
    newItem[e.target.name] = e.target.value
    setProduct(newItem)
  }

  const handleClose = () => {
    navigate(`/`)
    dispatch(setSelectedProduct({ value: '' }))
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
          onClick={handleClose}
        >
          Close
        </Button>
        <div className='collectionOfInputs'>
          <input className='name' type="text" name='name' value={product.name} onChange={handleChangeInput} placeholder='Name'  />
          <input className='price' type="number" name='price' value={product.price} onChange={handleChangeInput}    placeholder='Price'  />
          <input className='description' type="text" name='description' value={product.description} onChange={handleChangeInput} placeholder='Description' />
          <div className='date'>{product.creationDate && new Date(product.creationDate).toLocaleString()}</div>
        </div>
        <Button className='btn-add-product' variant='contained' onClick={handleSaveProduct}>
          Save
        </Button>
      </div>
    </div >
  );
};

export default ProductDetails;
