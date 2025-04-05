import { useState } from 'react';
import '../styles/IntroStyles.css';
import { defaultProduct, products } from '../utils/StoreData';
import CardBox from './CardBox';
import Header from './Header';

const StoreIntro = () => {
  const [isViewCard, setViewCard] = useState(false);
  const [isViewCleanCard, setViewCleanCard] = useState(false);
  const [productList, setProductList] = useState(products);

  const [choosedProduct, setChoosedProduct] =
    useState(defaultProduct);

  const handleChoosedProduct = (productItem) => {
    setViewCard(true);
    setViewCleanCard(false);
    setChoosedProduct(productItem);
  };
  const updateProductList = (elem, addNewElement) => {
    if (!addNewElement) {
      setProductList(prevItems => prevItems.map((item, index, array) => item.id === elem.id ? { ...item, ...elem } : item))
    }else{
      setProductList(prevItems =>( [...prevItems,elem]))
    }
  };

  const handleAddItem = () => {
    setViewCleanCard(true);
    setViewCard(false);
    setChoosedProduct(defaultProduct);
  }


  return (
    <div className='wrapper'>
      <div className='main-area'>
        <Header />
        <CardBox handleAddItem={handleAddItem} updateProductList={updateProductList} productList={productList} setProductList={setProductList} isViewCard={isViewCard} isViewCleanCard={isViewCleanCard}
          setViewCleanCard={setViewCleanCard} handleChoosedProduct={handleChoosedProduct} choosedProduct={choosedProduct} setViewCard={setViewCard} />
      </div>
    </div>
  );
};

export default StoreIntro;
