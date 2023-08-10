import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [dataarr, setdataarr] = useState([]);
  const [filter, setfilter] = useState("");
  const [sort, setsort] = useState("");
  const baseUrl = `http://localhost:3000/movies`;
  

  const filterAndSort = () => {
    let filteredUrl = baseUrl;

    if (filter !== "default") {
      filteredUrl += `?type=${filter}`;
    }

    if (sort === "newest-first") {
      filteredUrl += `${
        filter !== "default" ? "&" : "?"
      }_sort=year&_order=desc`;
    } else if (sort === "oldest-first") {
      filteredUrl += `${
        filter !== "default" ? "&" : "?"
      }_sort=year&_order=asc`;
    }

    fetch(filteredUrl)
      .then((res) => res.json())
      .then((data) => {
        setdataarr(data);
      });
  };

  const filterfun = (e) => {
    const fil = e.target.value;
    setfilter(fil);
  };

  const sortfun = (e) => {
    const sorted = e.target.value;
    setsort(sorted);
  };

  useEffect(() => {
    filterAndSort();
  }, [filter, sort]);

  useEffect(() => {
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setdataarr(data);
      });
  }, [baseUrl]);

  return (
    <div data-testid="movie-list">
      <h1>Movies List</h1>
      <div>
        <label>Sort By Year</label>
        <select data-testid="sort" onChange={sortfun}>
          <option value="default">--</option>
          <option value="oldest-first">Oldest first</option>
          <option value="newest-first">Newest first</option>
        </select>
      </div>
      <div>
        <label>Filter By Type</label>
        <select data-testid="filter" onChange={filterfun}>
          <option value="default">--</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>
      </div>
      <br />
      <br />
      <div data-testid="movie-container">
        {/* render all the movies data with the help of MovieCard component here */}
        {dataarr.length > 0 ? (
          <MovieCard movies={dataarr} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;
