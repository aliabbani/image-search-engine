import { useState, useEffect } from 'react';
import './app.css';

function App() {
  const [query, setQuery] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        'https://pixabay.com/api/?key=26680467-f23804cff8e6e49ca4c6bbb4c&q=all&image_type=photo'
      );
      const data = await response.json();
      const { hits } = data;
      setQuery(() => hits);
      console.log('here our new hits', hits);
    }
    fetchData();
  }, []);

  return (
    <div className="pt-10 px-2 pb-20">
      <input
        className="input-idea pl-2 mb-5 w-3/5 h-9"
        placeholder="search ..."
        onChange={handleChange}
      />
      <div className="sm:flex flex-row flex-wrap gap-3 ">
        {query.filter((post) => {
            if (query === '') {
              return post;
            } else if (post.tags.toLowerCase().includes(input.toLowerCase())) {
              return post;
            }
            return false;
          })
          .map((post) => (
            <div key={post.id}>
              <img
                className="image-flower pb-3 sm:pb-0 "
                src={post.webformatURL}
                alt="all search"
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
