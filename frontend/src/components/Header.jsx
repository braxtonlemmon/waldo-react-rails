import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  height: 60px;
  width: 100%;
`;

const NavBar = styled.header`
  height: 60px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  color: ${props => props.theme.main};
  z-index: 5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  font-family: 'Rye', cursive;
  text-shadow: 1px 1px 1px lightgray;
  box-shadow: 0 5px 4px ${props => props.theme.main};
  h1 {
    font-size: 2em;
    margin: 0;
    padding: 0;
  }

  .timer-box {
    font-size: 2em;
    font-family: monospace;
    border-bottom: 3px dashed ${props => props.theme.main};
    border-top: 3px dashed ${props => props.theme.main};
    text-align: right;
    padding: 5px;
  }

  .top-scores-box {
    cursor: pointer;
    font-size: 1.5em;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = (props) => {
  const [time, setTime] = useState(Date.now());
  
  useEffect(() => {
    const interval = setInterval(() => {
    setTime(Date.now());
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <NavBarContainer>
      <NavBar>
        <h1>Waldo!</h1>
        <div className="timer-box">
          {
            props.isIntroActive ? '0.0' :
          ((Date.now() - props.startTime) / 1000).toFixed(1)
          }
        </div>
        <div 
          className="top-scores-box"
          onClick={props.handleClickTopScores}
        >Top Scores</div>
      </NavBar>
    </NavBarContainer>
  )
}

export default Header;