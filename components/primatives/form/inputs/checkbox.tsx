import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  input {
    display: none;
    &:checked + label:before {
      content: "\f00c";
      font: normal normal normal 14px/1 FontAwesome;
      color: #fff;
      border-color: transparent;
      background: #257fff;
    }
  }

  label {
    display: inline-block;
    padding: 0.5rem 0 0.5rem 2rem;
    &:before {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      content: "";
      height: 20px;
      width: 20px;
      border-radius: 0.5rem;
      border: 1px solid #ccc;
    }
  }
`;

const Checkbox = (props) => {
  const { label, name } = props;
  return (
    <Wrapper>
      <input type="checkbox" id={name} name={name} {...props} />
      <label htmlFor={name}>{label}</label>
    </Wrapper>
  );
};

export default Checkbox;
