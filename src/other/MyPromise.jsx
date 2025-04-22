import React from 'react'

const MyPromise = () => {
  ///Fetch
  const handleClick = () => {
    let rndNum = Math.floor(Math.random() * 10) + 1;
    try {
      fetch(`https://jsonplaceholder.typicode.com/todos/${rndNum}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error`)
          }
          return response.json()
        })
        .then(json => console.log('json', json))
        .catch(err => console.log(err))
    }
    catch (error) {
      console.error(error);
    }
  }

  /////Await
  // const handleClick = async () => {
  //     let rndNum = Math.floor(Math.random() * 10) + 1;
  //     try {
  //         const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${rndNum}`);
  //         if (!response.ok) {
  //             throw new Error(`HTTP Erroro`);

  //         }
  //         const json = await response.json();
  //         return console.log(json);
  //     }
  //     catch (error) {
  //         console.error('Error:', error);
  //     }

  // }

  //////Promise
  // const fetchData =() => {
  //     return new Promise(async (resolve, reject) => {
  //         let rndNum = Math.floor(Math.random() * 10) + 1;
  //         try {
  //             const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${rndNum}`);
  //             if (!response.ok) {
  //                 throw new Error(`HTTP Erroro`);
  //             }
  //             const json = await response.json();
  //             resolve(json)
  //         }
  //         catch (error) {
  //             reject(error)
  //         }
  //     })
  // }
  // const handleClick = async () => {
  //     try {
  //         const result = await fetchData();
  //         console.log('result', result);
  //     } catch (error) {
  //         console.error(error)
  //     }
  // }


  return (
    <button onClick={handleClick}>Click me</button>

  );
};


export default MyPromise
