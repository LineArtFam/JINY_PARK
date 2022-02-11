import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Write = () => {


  return (
    <div>
      <h1>write page</h1>
      <Link to="/">home</Link>
      <Link to="/view">view</Link>
      <form>
        <input type="text" />
        <input type="password" />
        <button to="/">로그인하기</button>
      </form>
    </div>
  );
};

export default Write;
