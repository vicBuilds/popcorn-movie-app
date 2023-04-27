import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: static;
  bottom: 0px;
  display: flex;
  height: 70px;
  background-color: #282727;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const footer = () => {
  return (
    <Container>
      <div>PopCorn</div>
      <div>Copyright. All Rights Reserved</div>
      <div>Designed and Developed by Victor Mitra</div>
    </Container>
  );
};

export default footer;
