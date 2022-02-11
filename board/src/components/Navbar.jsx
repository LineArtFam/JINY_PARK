import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ login }) {
  return (
    <NavContainer>
      <div className="navLeft">
        <img src="http://3.34.175.3/assets/img/jlucy-logo.png" alt="" />
      </div>
      <div className="navCenter">JIN.</div>
      <div className="navRight">
        <Link to="/" className="menuListItem">
          Home
        </Link>
        <Link to="/board" className="menuListItem">
          board
        </Link>

        {login ? (
          <Link to="/" className="menuListItem">
            logout
          </Link>
        ) : (
          <Link to="/login" className="menuListItem">
            login
          </Link>
        )}
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
  .navCenter {
    text-align: center;
  }
  .navRight {
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: none;
      padding: 20px;
    }
  }
`;
