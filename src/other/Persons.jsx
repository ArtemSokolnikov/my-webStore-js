import React, { useState } from 'react';
import '../App.css';
import _ from 'lodash';

const Persons = () => {
  let initialValue = [
    { name: 'John', age: 31, city: 'Rehovot' },
    { name: 'Jack', age: 48, city: 'TA' },
    { name: 'Peter', age: 22, city: 'B7' },
  ];
  const [persons, setPersons] = useState(initialValue);

  const clickHandler = () => {
    setPersons((prev) =>
      prev.map((person) =>
        person.name === 'John' ? { ...person, age: 20 } : person
      )
    );
  };
  return (
    <div>
      {_.map(persons, (person, index) => (
        <div key={index}>
          <p>{person.name}</p>
          <p>{person.age}</p>
          <p>{person.city}</p>
        </div>
      ))}
      <button onClick={clickHandler}>Click me!</button>
    </div>
  );
}

export default Persons
