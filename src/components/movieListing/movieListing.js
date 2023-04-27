import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import { useEffect } from "react";
import MovieCard from "../movieCard/movieCard";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  margin: 0px;
  //min-height: 100%;
  box-sizing: border-box;
  min-height: 100vh;
  display: flex;
  //justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const MovieListing = () => {
  //const [movies, setMovies] = useState(null);
  const data = useSelector(getAllMovies);
  const [response, setResponse] = useState("True");
  useEffect(() => {
    setResponse(data.Response);
  }, [data, response]);
  console.log(data);

  return (
    <Container>
      <h2 style={{ color: "white" }}>
        {data.Response === "False" && "Sorry! No Results Found"}
      </h2>
      {data &&
        data.Response &&
        data.Search &&
        data.Search.map((item) => {
          return <MovieCard data={item} key={item.Title} />;
        })}
    </Container>
  );
};

export default MovieListing;
