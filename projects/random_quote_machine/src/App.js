import { useEffect, useState } from "react";

const getQuote = () =>
  new Promise((resolve, reject) => {
    try {
      fetch(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
        .then((response) => response.json())
        .then(({ quotes }) => {
          const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
          resolve(randomQuote);
        });
    } catch (error) {
      reject(error);
    }
  });

function App() {
  const [quote, setQuote] = useState("");
  function getNewQuote() {
    getQuote().then(setQuote);
  }
  useEffect(() => {
    getNewQuote();
  }, []);
  return (
    <div id="quote-box">
      <p id="text">{quote.quote}</p>
      <p id="author">{quote.author}</p>
      <button id="new-quote" onClick={getNewQuote}>
        New quote
      </button>
      <a href="twitter.com/intent/tweet" id="tweet-quote">
        Tweet quote
      </a>
    </div>
  );
}

export default App;
