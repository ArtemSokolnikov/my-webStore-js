import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { setSelectedProduct } from '../store/productListSlice';
import { selectProductPropsCombined } from '../store/selectors';
import '../styles/IntroStyles.css';
import Header from './Header';

const StoreIntro = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { collectionOfProducts, isCreating } = useSelector(selectProductPropsCombined);

  useEffect(() => {
    if (isCreating) return;
    const selectedCard = collectionOfProducts.find(p => p.id.toString() === id) || null;
    dispatch(setSelectedProduct({ value: selectedCard }));
  }, [id, collectionOfProducts, isCreating]);

  return (
    <div className='wrapper' data-testid="wrapper">
      <div className='main-area'>
        <Header />
        <div className="mainCardContent">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StoreIntro;
