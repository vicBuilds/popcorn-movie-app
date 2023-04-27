import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../loader/loader";
import styled from "styled-components";
import Star_Path from "../../assets/images/star.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  width: 100%;
  padding: 10px;
  background-color: #171716;
`;

const PosterImage = styled.img`
  flex: 3;
  max-width: 100%;
  max-height: 70%;
  margin-top: 15px;
  transition: all 0.9s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const DetailContainer = styled.div`
  background-color: #171716;
  width: 95%;
  margin-top: 15px;
`;

const TitleBar = styled.h3`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  font-weight: 300;
  margin: 10px 0px;
`;

const MovieDetail = () => {
  const Location = useLocation();
  //console.log(Location);
  //console.log("Hello", Location);
  const { Title, Year, Type, Poster, imdbID } = Location.state;

  const [Loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState(null);

  const fetchAllDetails = async () => {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=6e4ce4a8&i=${imdbID}&plot=full`
    );
    response = await response.json();
    setMovieData(response);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllDetails();
  }, []);

  // console.log("Title is ", Title);
  // console.log("Poster is ", Poster);

  return (
    <Container>
      {Loading && <Loader />}
      {movieData && (
        <>
          <PosterImage src={movieData.Poster} />
          <DetailContainer>
            <TitleBar style={{ fontWeight: "800", color: "brown" }}>
              {movieData.Title} ({movieData.Rated})
            </TitleBar>
            <TitleBar style={{ color: "coral" }}>
              Genre: {movieData.Genre}
            </TitleBar>
            <TitleBar style={{ color: "#d3cccc" }}>
              Year: {movieData.Year}
            </TitleBar>
            <TitleBar style={{ color: "#d3cccc" }}>
              Director: {movieData.Director}
            </TitleBar>
            <TitleBar style={{ color: "#d3cccc" }}>
              Runtime: {movieData.Runtime}
            </TitleBar>
            <TitleBar style={{ width: "90%", color: "#76c479" }}>
              Plot: {movieData.Plot}
            </TitleBar>
            <TitleBar style={{ color: "#d3cccc" }}>
              IMDB:
              <img src={Star_Path} style={{ height: "30px", width: "30px" }} />
              {movieData.imdbRating}/10
            </TitleBar>
            <TitleBar style={{ color: "#d3cccc" }}>
              Votes: {movieData.imdbVotes}
            </TitleBar>
          </DetailContainer>
        </>
      )}
    </Container>
  );
};

export default MovieDetail;
