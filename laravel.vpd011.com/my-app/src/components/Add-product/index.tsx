import AddProduct from '/xampp/htdocs/PHP/laravel.vpd011.com/my-app/src/components/Add-product/AddProduct';
import reduxThunk from 'redux-thunk';
import React from "react";
import ReactDOM from "react-dom";
import streams from '/xampp/htdocs/PHP/laravel.vpd011.com/my-app/src/aps/streams'

export default AddProduct;

export const createStream = (formValues: any) => () => {
    streams.post('./streams', formValues);
  };