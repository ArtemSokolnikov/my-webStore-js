import axios from 'axios';
import parse from 'node-html-parser';
import React, { useState } from 'react'

const SearcherOfLinks = () => {
  const myURL = 'http://localhost:3001/';
  const [arrOfLinks, setArrOfLinks] = useState([]);

  async function extractLinksFromWebsite(url) {
    try {
      const response = await axios.get(url);
      const root = parse(response.data);
      const links = [];
      root.querySelectorAll('a').forEach((element) => {
        const link = element.getAttribute('href');
        if (link && !link.startsWith('#')) {
          links.push(link);
        }
      });
      return setArrOfLinks(links);
    } catch (error) {
      console.error('Request error', error);
    }
  }
  return (
    <div>
      <button onClick={() => extractLinksFromWebsite(myURL)}>
        Give me links!
      </button>
      <h2>
        {arrOfLinks.map((link, index) => (
          <h2 index={index}>{link}</h2>
        ))}
      </h2>
    </div>
  );
}

export default SearcherOfLinks
