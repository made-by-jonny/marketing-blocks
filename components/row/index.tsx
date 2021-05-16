import styled from "styled-components";

const Row = styled.div`
  display: flex;
  align-items: ${(p) => p.align || "flex-end"};
  justify-content: ${(p) => p.justify || "flex-start"};
  gap: 0.5rem;
`;

export default Row;
