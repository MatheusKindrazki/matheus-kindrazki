import styled, { keyframes } from "styled-components";

const line = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

const fill = keyframes`
  from {
    fill: transparent
  }
  to {
    fill: white
  }
`;

const upLogo = keyframes`
  to {
    transform: translate(-50%, -100%);
  }
`;

const button = keyframes`
  from {
    opacity: 0;
    pointer-events: none;
  }

  to {
    opacity: 1;
    pointer-events: all!important;
  }
`;

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap");

  width: 100%;
  height: 100vh;
  background: #020300;

  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ${upLogo} 1s ease-in-out forwards 2.5s;

    svg {
      animation: ${fill} 0.5s ease-in-out forwards 2s;
    }

    path {
      stroke-dasharray: 864;
      stroke-dashoffset: 864;
      animation: ${line} 4s ease forwards 0.5s;
    }
  }

  .explorer {
    position: absolute;
    top: 50%;
    left: 50%;
    opacity: 0;
    transform: translate(-49%, 100%);
    animation: ${button} 2s ease forwards 3s;

    button {
      font-family: "Poppins", Sans-serif;
      font-size: 16px;
      font-weight: 600;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      text-transform: uppercase;
      outline: none;
      cursor: pointer;

      border: 1px solid white;
      border-radius: 30px;

      width: 160px;
      height: 45px;

      transition: all 0.5s ease;

      &:hover {
        background: white;
        color: #020300;
      }
    }
  }
`;
