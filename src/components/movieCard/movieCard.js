import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ImageContainer = styled.img`
  height: 90%;
  width: 100%;
`;

const CardContainer = styled.div`
  height: 480px;
  width: 250px;
  margin: 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid white;
  transition: all 0.9s ease;

  &:hover {
    transform: scale(1.02);
    letter-spacing: 1px;
  }
`;

const Title = styled.h3`
  color: white;
  background-color: #1d1a1a;
`;

const MovieCard = (data) => {
  //console.log("Data received in the Component is ", data.data);
  const navigate = useNavigate();

  const handleClickonMovieCard = (e) => {
    e.preventDefault();
    navigate(`/movie/${data.data.Title}`, { state: data.data });
  };

  return (
    <CardContainer onClick={(e) => handleClickonMovieCard(e)}>
      <ImageContainer
        src={data.data.Poster}
        alt={data.data.title}
        key={data.data.title}
      />
      <Title>{data.data.Title}</Title>
      <Title style={{ fontWeight: "400" }}>{data.data.Year}</Title>
    </CardContainer>
  );
};

export default MovieCard;
