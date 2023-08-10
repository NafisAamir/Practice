import React, { useState } from "react";
import axios from "axios";

const AddMovie = () => {
  const [inputdata,setinputdata]=useState({
    title:"",
    year:"",
    IMDB:"",
    type:"",
    rating:"",
    poster:"",
  })

  const [inputvalue,setinputvalue]=useState(inputdata);

  const submitfun=(e)=>{
    e.preventDefault();
    // const requestOptions = {
    //   method: "POST",
    //   headers:{"Content-type":"application/json"},
    //   body:JSON.stringify(inputvalue),
    // };

    // fetch(`http://localhost:3000/movies`, requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => console.log(result))
    axios.post(`http://localhost:3000/movies`,inputvalue)
  }

  const changefun=(e)=>{
    e.preventDefault();
    setinputvalue({...inputvalue,[e.target.name]:e.target.value})

  }
  return (
    <div data-testid="add-movie">
      <h1>Add Movie</h1>
      <form data-testid="add-movie-form" onSubmit={submitfun} >
        Title: <br/> <br/>
        <input type="text" placeholder="Title" name="title" onChange={changefun} />
        <br /><br/>
        Year:<br/>  <br/> <input type="number" placeholder="Year" name="year"onChange={changefun}/>
        <br/><br/>
        IMDB ID:<br/><br/>
        <input type="text" placeholder="IMDB ID" name="imdbID" onChange={changefun} />
        <br/><br/>
      
        <label htmlFor="">Type:</label>
        <br /><br />
        <select name="type" id="" onChange={changefun}>
        <option value="">Select a type</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>
        <br /><br />
        Rating: <br/><br/>
        <input type="text" placeholder="Rating" name="rating" onChange={changefun}/>
        <br /><br />
        Poster: <br/><br/>
        <input name="poster" type="text" placeholder="Poster" onChange={changefun} />
        <br /><br />
        <input type="submit" value={"Add Movie"}></input>
      </form>
    </div>
  );
};

export default AddMovie;
