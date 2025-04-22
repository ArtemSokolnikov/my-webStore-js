import React, { useEffect, useState } from 'react'

const MyAsync = () => {
    // const [res, setRes] = useState();
    const [res, setRes] = useState({ id: null, title: null, userId: null });



    const fetchData = () => {
        return new Promise(async (resolve, reject) => {
            let myNumber = Math.floor(Math.random() * 10) + 1;
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${myNumber}`);
                if (!response.ok) {
                    throw new Error('HTTP erroro')

                }
                const json = await response.json();
                resolve(json)

            }
            catch (error) {
                reject(error);
            }
        })
    }
    const handleClick = async () => {
        try {
            const result = await fetchData();
            setRes(result);
            console.log(result);
        }
        catch (error) {
            console.error(error);
        }

    }
    useEffect(() => {
        handleClick()
    }, [])

    return (
        <div>
            <input onChange={(e) => console.log(e.target.value)} type="text" />
            <div>ID: {res.id}</div>
            <div>Title: {res.title}</div>
            <div>User ID: {res.userId}</div>
            <img src={res.url} alt="Description" />
            <div> <button onClick={handleClick}>Click me</button></div>
        </div>
    );
}

export default MyAsync
