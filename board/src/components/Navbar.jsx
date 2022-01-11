import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavContainer>
      <div className="navLeft">
        <img src="http://3.34.175.3/assets/img/jlucy-logo.png" alt="" />
      </div>
      <div className="navCenter">JIN.</div>
      <div className="navRight">
        <ul className="menuList">
          <li className="menuListItem">Home</li>
          <li className="menuListItem">board</li>
          <li className="menuListItem">Home</li>
          <li className="menuListItem">Home</li>
        </ul>
      </div>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  background: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .navRight {
    height: 100vh;
    .menuList {
      background: #ccc;
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .menuListItem {
        text-decoration: none;
        list-style: none;
      }
    }
  }
`;
