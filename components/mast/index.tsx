import styled from "styled-components";

// margin
const Mast = styled.div`
  padding: 1rem 10%;
  position: ${(p) => p.fixed || "relative"};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default Mast;
