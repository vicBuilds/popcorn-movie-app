import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import popcornIcon from "../../assets/images/popcorn-icon.png";

const Container = styled.div`
  width: 100vw;
  background-color: #282727;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  cursor: pointer;
  box-sizing: border-box;
  height: 120px;
`;
const Logo = styled.div`
  font-size: 78px;
  color: white;
  transition: all 0.9s ease;
  &:hover {
    letter-spacing: 1px;
  }
  text-shadow: 8px 0px 22px #f80000;
  @media (max-width: 506px) {
    font-size: 50px;
  }
`;

const UserImage = styled.img`
  height: 103px;
  width: 101px;
`;

const Header = () => {
  return (
    <Container>
      <Logo>
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bolder",
          }}
        >
          POP
          <span style={{ color: "yellow", fontStyle: "italic" }}>CORN</span>
        </Link>
      </Logo>
      <UserImage
        // src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
        src={popcornIcon}
        alt="user"
      />
    </Container>
  );
};

export default Header;
