import React from "react";
import MovieList from "./Components/MovieList";
import { useState } from "react";
import AddMovie from "./Components/AddMovie";

const App = () => {
  const [state,setstate]=useState(false);
  const addmoviefun=()=>{
    setstate(true);
  }
  const movielistfun=()=>{
    setstate(false);
  }
  return (
    <div className="App">
      <h1>React Movies List</h1>
      {/* The below button should have text content as either `Show Movies`or `Add Movie` */}

      {state?<button data-testid="toggle-btn" onClick={movielistfun}>MovieList</button>:<button data-testid="toggle-btn" onClick={addmoviefun}>Add Movie</button>}
      <div data-testid="container">
        {/* Add the required components here either AddMovie or MovieList will exist on DOM at a time*/}
        {state?<AddMovie/>:<MovieList/>}
      </div>
    </div>
  );
};

export default App;
