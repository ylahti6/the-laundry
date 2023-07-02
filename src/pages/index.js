import React from "react";
import styled from "styled-components";

export default function Hero() {
  const mainPage = styled.div`
    h1 { text-transform: capitalize}
  `;

  return (
    <mainPage>
      <div className="container">
        <div className="top">
          <h1>what we do,</h1>
          <h1>about,</h1> 
          <h1>vision,</h1> 
          <h1>e5 9bu</h1>
       </div>

      <div className="bottom">
       <h1>the laundry</h1>
       <h3>contact</h3>
       <h3>journal</h3>
       <h3>Coded by : Yannick Lahti</h3>
      </div>
      </div>
    </mainPage>
  );
}