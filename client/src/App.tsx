import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import imageWords from "./words.jpg";
// import "./App.css";

import MainPage from "./MainPage";

const Warpper = styled.h1`
  font-size: 20px;
  text-transform: uppercase;
  font-family: "Josefin Sans", sans-serif;
  background: linear-gradient(to right, #dfd3c3 10%, #d0b8a8 50%, #f8ede3 60%);
  background-size: 200% auto;
  background-clip: text;
  text-fill-color: transparent;
  animation: textclip 3.5s linear infinite;
  display: inline-block;

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;

function App() {
  return (
    <div>
      <Global
        styles={css`
          body {
            text-align: center;
            background-image: url(${imageWords});
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
            font-size: 30px;
          }
        `}
      />
      <Warpper>
        <h1>Queries at the English dictionary</h1>
      </Warpper>
      <MainPage />
    </div>
  );
}

export default App;
