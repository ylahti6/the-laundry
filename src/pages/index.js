import React, { useState } from "react";
import styled from "styled-components";
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import "../styles/Global/GlobalStyle.css";
import "../styles/Variable/Variables.css";

export default function Hero() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const MainPage = styled.div`
    

    .container {
      position: relative;
      height: 100vh;
      width: 100%;

      &.dark-mode { /* Updated the class name selector to correctly apply dark mode styles */
        color: var(--light);
        background: var(--dark);

        .dark {
          display: none;
        }
      }

      .light { display: none;}

      .dark-mode-toggle { 
        float: right; 
        margin: 1rem; 
        border-radius: 100%; 
        height: 2rem;
        width: 2rem; background: none; 
      }

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
        h3 {
          display: flex;
        }
        h1 {
          font-size: 10vw;
        }
        span {
          display: flex;
        }
      }
    }
  `;

  return (
    <MainPage>
      <div className={`container ${darkMode ? "dark-mode" : ""}`}>
        
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        <MdDarkMode className="icon dark"/>
        <MdLightMode className="icon light"/>
        </button>

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
