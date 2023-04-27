import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import MovieApi from "../../common/apis/movieApi";
import { useDispatch, useSelector } from "react-redux";
import APIKey from "../../common/apis/movieApiKey";
import { addMovies, changeKeyword } from "../../features/movies/movieSlice";
import MovieListing from "../movieListing/movieListing";
import Loader from "../loader/loader";

const Container = styled.div`
  width: 100%;
`;

const Button = styled.button`
  color: white;
  background-color: black;
  cursor: pointer;
  height: 30px;
  transition: all 0.9s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Input = styled.input`
  background-color: black;
  color: white;
  border: none;
  box-sizing: border-box;
  margin-left: 10px;
`;

const Home = () => {
  const dispatch = useDispatch();
  const keyword = useSelector((state) => {
    return state.movies.intialKeyword;
  });

  //console.log("Keyword is ", keyword);
  //const MovieText = "Harry";
  //let [MovieText, setMovieText] = useState("Dark");
  let [initialSearchType, setinitialSearchType] = useState("movie");
  let [inputValue, setInputValue] = useState("");

  const fetchMovies = async () => {
    const response = await MovieApi.get(
      `?apikey=${APIKey}&s=${keyword}&type=${initialSearchType}`
    ).catch((err) => {
      console.log("Error is ", err);
    });
    //console.log(response.data);
    dispatch(addMovies(response.data));
  };

  useEffect(() => {
    fetchMovies();
  }, [keyword]);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(inputValue);
    // setMovieText(inputValue);
    dispatch(changeKeyword(inputValue));
    setInputValue("");
  }

  const handleChangeInChoice = (e) => {
    e.preventDefault();
    initialSearchType = e.target.value;
    setinitialSearchType(e.target.value);
    //console.log(initialSearchType);
  };

  return (
    <Container>
      <form style={{ height: "40px", width: "100%", margin: "20px" }}>
        <select
          name="type"
          onChange={(e) => {
            handleChangeInChoice(e);
          }}
          style={{ color: "white", backgroundColor: "black", height: "80%" }}
        >
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="episode">Episode</option>
        </select>
        <Input
          type="text"
          required
          placeholder="Enter the Name of the Movie"
          value={inputValue}
          onChange={(e) => {
            inputValue = e.target.value;
            setInputValue(e.target.value);
          }}
          style={{ height: "90%", width: "190px", marginRight: "5px" }}
        />
        <Button
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Search
        </Button>
      </form>
      <MovieListing />
    </Container>
  );
};

export default Home;
