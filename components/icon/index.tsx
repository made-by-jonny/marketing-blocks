import styled from "styled-components";

const Wrapper = styled.i`
  height: 60px;
  width: 60px;
  margin-bottom: 1rem;
  margin-right: 1rem;
  border-radius: 1000px;
  background: #eff2f6;
  color: #19224d;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const Icon: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Icon;
