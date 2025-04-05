import React from 'react'
import ProductDetails from './ProductDetails';
import CardCollection from './CardCollection';

import '../styles/CardBoxStyles.css';
const CardBox = ({handleAddItem,productList,setProductList,updateProductList, handleChoosedProduct, choosedProduct, setViewCard, isViewCard, isViewCleanCard, setViewCleanCard }) => {



  return (
    <div className="mainCardContent">
      <CardCollection handleChoosedProduct={handleChoosedProduct} productList={productList} setProductList={setProductList} handleAddItem={handleAddItem} />
      {isViewCard && !isViewCleanCard &&  (
        <ProductDetails
          updateProductList={updateProductList}
          setViewCleanCard={setViewCleanCard}
          setViewCard={setViewCard}
          choosedProduct={choosedProduct}
        />
      )}
      {!isViewCard && isViewCleanCard &&  (
        <ProductDetails
          updateProductList={updateProductList}
          setViewCard={setViewCard}
          setViewCleanCard={setViewCleanCard}
          choosedProduct={choosedProduct}
        />
      )}
    </div>
  )
}

export default CardBox
