import styled from "styled-components";
import React from "react";
//add to vars
// break point
// specific columns
const Grid: React.FC<{
  min?: string;
  max?: string;
  style?: object;
}> = styled.ul`
  all: unset;
  list-style: none;
  display: grid;
  grid-template-columns: ${(p) => p.min || "1fr"};
  gap: 1rem;
  i {
    margin: 0;
  }

  @media (min-width: 600px) {
    grid-template-columns: ${(p) => p.max || "1fr 1fr"};
  }
`;

export default Grid;
