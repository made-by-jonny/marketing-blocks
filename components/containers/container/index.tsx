import styled from "styled-components";
import React from "react";
//add to vars
// break point
// specific columns
const Container: React.FC<{
  className?: string;
  as?: string;
  min?: string;
  max?: string;
}> = styled.article`
  display: grid;
  margin-bottom: 4rem;
  grid-template-columns: ${(p) => p.min || "1fr"};
  gap: 1rem;
  &.full {
    min-height: 100vh;
  }

  @media (min-width: 600px) {
    grid-template-columns: ${(p) => p.max || "1fr"};
  }
`;

export default Container;
