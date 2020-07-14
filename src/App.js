/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Albums from "./components/Albums";
import "./App.css";

function App() {
  // let posts = [];
  const [albums, setAlbums] = useState([]);

  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((results) => setAlbums(results))
      .catch((error) => {
        throw Error(error);
      });
  };

  useEffect(() => getPosts(), []);

  return (
    <div className="container">
      <h1>Albums</h1>
      <Albums albums={albums} />
    </div>
  );
}

export default App;
