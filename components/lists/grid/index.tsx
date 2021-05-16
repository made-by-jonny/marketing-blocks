import styled from "styled-components";

//add to vars
// break point
// specific columns
const Grid: React.FC<{ min?: string; max?: string }> = styled.ul`
  all: unset;
  margin: 1rem 0;
  list-style: none;
  display: grid;
  grid-template-columns: ${(p) => p.min || "1fr"};
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: ${(p) => p.max || "1fr 1fr"};
  }
`;

export default Grid;
