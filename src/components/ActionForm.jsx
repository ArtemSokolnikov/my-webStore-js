import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import '../styles/ActionFormStyles.css';
import React from 'react';


const ActionForm = ({
  isSearchValue,
  setSearchValue,
  isSortValue,
  setSortValue,
  handleAddItem,
}) => {
  return (
    <div className='action-container'>
      <input
        type='text'
        placeholder='Add name for filtering'
        value={isSearchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <FormControl sx={{ minWidth: '150px', borderRadius: '12px' }}>
        <InputLabel id='demo-simple-select-label'>Sort by</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          label='SortBy'
          value={isSortValue}
          onChange={(e) => setSortValue(e.target.value)}
        >
          <MenuItem value='name'>Name</MenuItem>
          <MenuItem value='costUp'>Cost up</MenuItem>
          <MenuItem value='costDown'>Cost down</MenuItem>
        </Select>
      </FormControl>
      <Button variant='contained' onClick={handleAddItem}>Add item</Button>
    </div>
  );
};

export default ActionForm;
