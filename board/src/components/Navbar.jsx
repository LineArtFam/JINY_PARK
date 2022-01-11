import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return <NavContainer></NavContainer>;
}

const NavContainer = styled.div`
    width: 100%;
    height: 50px;
    position: sticky;
    top: 0;
    background: #ccc;
`;
