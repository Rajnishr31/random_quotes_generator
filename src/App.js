import React, { useState } from 'react';
import './App.css';

function App() {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The only source of knowledge is experience. - Albert Einstein"
  ];

  const [randomQuote, setRandomQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    setRandomQuote(quote);
  };

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <button onClick={generateRandomQuote}>Generate Quote</button>
       <p>{randomQuote}</p>
    </div>
  );
}

export default App;
