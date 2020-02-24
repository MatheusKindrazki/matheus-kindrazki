import React, { useEffect, useMemo } from "react";

import { Container } from "./styles";

export default function Section({ view }) {
  return (
    <Container className="section-main">
      <div className="hero">
        <img src="./teste.jpg" alt="" srcset="" />
        <h2>Teste 123</h2>
      </div>
      <div className="slider"></div>
    </Container>
  );
}
