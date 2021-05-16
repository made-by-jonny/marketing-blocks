import styled from "styled-components";

const Card = styled.article`
  border-radius: 0.5rem;
  border: 1px solid #e1e5ea;
  text-align: left;
  flex: 1;
  .contrast {
    background: #eff2f6;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.9rem;
  }
  .button {
    min-width: 100%;
  }
`;

export default Card;
