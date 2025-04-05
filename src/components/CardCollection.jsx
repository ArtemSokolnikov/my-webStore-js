import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import Card from './Card';
import '../styles/CardCollectionStyles.css';
import React from 'react';
import ActionForm from './ActionForm';

const ITEMS_PER_PAGE = 5;
const CardCollection = ({
  handleChoosedProduct, productList, setProductList,handleAddItem
}) => {


  const [page, setPage] = useState(1);
  const [isSearchValue, setSearchValue] = useState('');
  const [isSortValue, setSortValue] = useState('');
  const pageCount = Math.ceil(productList.length / ITEMS_PER_PAGE);

  const handleChange = (_event, value) => {
    setPage(value);
  };

  const displayedProducts = [...productList]
    .slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)
    .filter((item) =>
      item.name.toLowerCase().includes(isSearchValue.toLowerCase())
    )
    .sort((a, b) => {
      if (isSortValue === 'name') return a.name.localeCompare(b.name);
      if (isSortValue === 'costUp') return a.price - b.price;
      if (isSortValue === 'costDown') return b.price - a.price;
      return 0;
    });

  const handleRemoveProduct = (index) => {
    setProductList((prev) => prev.filter((item) => item.id !== index));
  };

  return (
    <div className='main-content'>
      <div className='product-list'>
        <div className='list-title'>
          <p>Products</p>
        </div>
        <ActionForm
          isSearchValue={isSearchValue}
          setSearchValue={setSearchValue}
          isSortValue={isSortValue}
          setSortValue={setSortValue}
          handleAddItem={handleAddItem}
        />
        <div className='grid-container'>
          <div className='grid-content'>
            {displayedProducts.map((item) => (
              <div key={item.id}>
                <Card
                  product={item}
                  handleChoosedProduct={handleChoosedProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
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
  );
};

export default CardCollection;
