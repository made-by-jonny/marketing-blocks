import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  color: ${(p) => p.theme.colors.secondary};
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 0.04rem;
`;

const blackBackgroundImage = () =>
  "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e";

const SelectInput = styled.select`
  all: unset;
  width: 100%;
  box-sizing: border-box;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin-top: 0.3rem;
  border-width: 2px;
  border-style: solid;
  border-color: ${(p) => p.theme.colors.secondary};
  transition: all 0.3s;
  background: transaparent url("${blackBackgroundImage}") no-repeat right
    0.75rem center/8px 10px;
  display: inline-block;
  vertical-align: middle;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  option {
    color: #000000;
    -webkit-text-fill-color: #000000;
  }
`;

const Select = (props) => {
  const { label, name, children } = props;
  return (
    <InputContainer>
      <Label htmlFor={name}>{label}</Label>
      <SelectInput {...props} id={name}>
        {children}
      </SelectInput>
    </InputContainer>
  );
};

export default Select;
