import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectProductPropsCombined } from '../store/selectors';
import '../styles/CardCollectionStyles.css';
import ActionForm from './ActionForm';
import Card from './Card';
import { Outlet } from 'react-router-dom';

const ITEMS_PER_PAGE = 5;
const CardCollection = () => {
  const { collectionOfProducts, searchedValue, sortedValue } = useSelector(selectProductPropsCombined);
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(collectionOfProducts.length / ITEMS_PER_PAGE);

  const handleChange = (_event, value) => {
    setPage(value);
  };
  const displayedProducts = [...collectionOfProducts]
    .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
    .filter((item) =>
      item.name.toLowerCase().includes(searchedValue.toLowerCase())
    )
    .sort((a, b) => {
      if (sortedValue === 'name') return a.name.localeCompare(b.name);
      if (sortedValue === 'costUp') return a.price - b.price;
      if (sortedValue === 'costDown') return b.price - a.price;
      return 0;
    });

  return (
    <div className='wrapper-collection'>
      <div className='main-content'>
        <div className='product-list'>
          <div className='list-title'>
            <p>Products</p>
          </div>
          <ActionForm />
          <div className='grid-container'>
            <div className='grid-content'>
              {displayedProducts.map((item) => (
                <div key={item.id}>
                  <Card product={item}  />
                </div>
              ))}
            </div>
          </div>
          <div className='paginationBar'>
            <Stack>
              <Pagination
                count={pageCount}
                page={page}
                color='primary'
                onChange={handleChange}
              />
            </Stack>
          </div>
        </div>

      </div>
      <Outlet />
    </div>
  );
};

export default CardCollection;
