import React from "react";
import styled from "styled-components";

import "../styles/Global/GlobalStyle.css";
import "../Styles/Variable/Variables.css";

export default function Hero() {
  const MainPage = styled.div`
    font-family: var(--font-sans);

    .container {
      /* background: red; */
      position: relative;
      height: 100vh;
      width: 100%;

      h1,
      h3 {
        text-transform: uppercase;
        font-weight: 600;
        margin: 1rem;
      }
      
      .top {
        display: flex;
      }

      .bot {
        position: absolute;
        bottom: 0;
        h3 { display: flex; }
        h1 { font-size: 10vw; }
        span { display: flex; }
      }
      
      
    }
  `;

  return (
    <MainPage>
      <div className="container">

        <div className="top">
          <h3>what we do,</h3>
          <h3>about,</h3>
          <h3>vision,</h3>
          <h3>e5 9bu</h3>
        </div>

        <div className="bot">
          
        <h1>the laundry</h1>
        <span>
          <h3>contact</h3>
          <h3>journal</h3>
          <h3>Yannick Lahti</h3>
          </span>
        </div>

      </div>
    </MainPage>
  );
}
