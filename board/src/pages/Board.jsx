import React from "react";
import styled from "styled-components";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";

const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .board {
    flex: 0.8;
    background: #ccc;
    height: 100%;
    div {
      
    }
  }
  div {
    flex: 0.1;
  }
`;

function Board() {
  return (
    <BoardContainer>
      <Sidebar></Sidebar>
      <div className="board">
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
      <Sidebar></Sidebar>
    </BoardContainer>
  );
}

export default Board;
