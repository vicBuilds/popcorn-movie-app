import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/home";
import PageNotFound from "./components/pageNotFound404/pageNotFound";
import MovieDetail from "./components/movieDetail/movieDetail";

const Container = styled.div`
  position: relative;
  max-width: 100vw;
  overflow: hidden;
  min-height: 100vh;
  /* background-color: #191d1d; */
  background-color: #171716;
`;

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/movie/:imdbId" Component={MovieDetail} />
        <Route path="*" Component={PageNotFound} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
