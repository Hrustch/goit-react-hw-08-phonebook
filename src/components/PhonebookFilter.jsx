import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactSlice';



export const PhonebookFilter = () => {
  const dispatch = useDispatch()
  const {filter} = useSelector(state =>(state))



  const onFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };


  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </>
  );
};
