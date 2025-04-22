import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import InfoCard from './InfoCard';

const MainCard = () => {

  const [myPlaceCard, setMyPlaceCard] = useState();
  useEffect(() => {
    // let rndNum = Math.floor(Math.random() * 10) + 1;
    try {
      fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then((response) => response.json())
        .then((data) => {
          const firstTenValues = _.slice(data, 0, 10);
          setMyPlaceCard(firstTenValues);
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div>
      {_.map(myPlaceCard, (cards, index) => (
        <InfoCard key={index} placeCard={cards} />
      ))}
    </div>
  );
}

export default MainCard
