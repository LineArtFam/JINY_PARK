import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: lightgray;
`;

function Home() {
  return <HomeContainer>Homepage</HomeContainer>;
}

export default Home;
