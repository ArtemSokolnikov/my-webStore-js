import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import '../styles/ActionFormStyles.css';
import React from 'react';
import { setSearchValue, setSelectedProduct, setSortValue,setIsCreating } from '../store/productListSlice';
import { useDispatch } from 'react-redux';
import { selectProductPropsCombined } from '../store/selectors';
import { useSelector } from 'react-redux';
import { defaultSelectedProduct } from '../utils/StoreData';
import { useNavigate } from 'react-router-dom';


const ActionForm = ({
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreateProduct = () => {
    dispatch(setIsCreating({ value: true }))
    dispatch(setSelectedProduct({ value: { ...defaultSelectedProduct, creationDate: new Date().toISOString() } }))
    navigate(`/product/${defaultSelectedProduct.id}`)
  }
  const { searchedValue, sortedValue } = useSelector(selectProductPropsCombined)
  return (
    <div className='action-container'>
      <input
        type='text'
        placeholder='Add name for filtering'
        value={searchedValue}
        onChange={(e) => dispatch(setSearchValue({ value: e.target.value }))}
      />
      <FormControl sx={{ minWidth: '150px', borderRadius: '12px' }}>
        <InputLabel id='demo-simple-select-label'>Sort by</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='SortBy'
          value={sortedValue}
          onChange={(e) => dispatch(setSortValue({ value: e.target.value }))}
        >
          <MenuItem value='name'>Name</MenuItem>
          <MenuItem value='costUp'>Cost up</MenuItem>
          <MenuItem value='costDown'>Cost down</MenuItem>
        </Select>
      </FormControl>
      <Button variant='contained' onClick={handleCreateProduct} data-testid="button" >Add item</Button>
    </div>
  );
};

export default ActionForm;
