import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 80vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  .hero {
    height: 60%;
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;

      object-fit: cover;
    }
  }
  h2 {
    position: absolute;
    font-family: "Poppins", Sans-serif;
    top: 70%;
    left: 8%;
    font-size: 70px;
    transform: translate(-20%, -70%);
    color: white;
  }
`;
