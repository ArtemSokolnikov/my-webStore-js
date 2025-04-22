import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const MyCounter = () => {
  const [isArray, setArray] = useState([]);
  const [isAnimatedIndex, setAnimatedIndex] = useState(0);

  useEffect(() => {
    if (isAnimatedIndex < isArray.length - 1) {
      let timeOut = setTimeout(() => {
        setAnimatedIndex(isAnimatedIndex + 1)
      }, 300)
      return () => clearTimeout(timeOut)
    }
  }, [isArray, isAnimatedIndex])

  const generateRandomArray = async () => {
    let randomArray = [];
    for (let i = 0; i < 10; i++) {
      let randomElement = Math.floor(Math.random() * 20) + 1;
      randomArray.push(randomElement)
    }
    setArray(randomArray);
    setAnimatedIndex(0);
    try {
      const response = await fetch('http://localhost:3001/createArray', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ array: randomArray })
      })
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
    } catch (error) {
      console.error(error)
    }
  }
  const handleSortArray = async () => {
    let arrayForSort = [...isArray];
    if (isAnimatedIndex === isArray.length - 1) {
      const promises = [];
      try {
        for (let i = 0; i < arrayForSort.length - 1; i++) {
          for (let j = 0; j < arrayForSort.length - i - 1; j++) {
            const promise = new Promise((resolve) => {
              setTimeout(() => {
                if (arrayForSort[j] > arrayForSort[j + 1]) {
                  [arrayForSort[j], arrayForSort[j + 1]] = [arrayForSort[j + 1], arrayForSort[j]]
                  setArray([...arrayForSort])
                }
                resolve();
              }, 100 * (i * arrayForSort.length + j))
            })
            promises.push(promise);
          }
        }
        await Promise.all(promises);//устанавливает порядок асинхронных операций
        const response = await fetch('http://localhost:3001/sortArray', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ array: arrayForSort })
        })
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

      } catch (error) {
        console.error(error)
      }
    }

  }
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px', marginBottom: '20px' }} >
        <Button onClick={generateRandomArray} variant='contained'>Create array</Button>
        <Button onClick={handleSortArray} variant='contained'>Sort</Button>
      </div>
      <div style={{ textAlign: 'center' }}>
        {isArray.slice(0, isAnimatedIndex + 1).map((element, index) => (
          <div key={index}>{element}</div>
        ))}

      </div>
    </div>
  )
}

export default MyCounter
