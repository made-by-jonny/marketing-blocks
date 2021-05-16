import styled, { css } from "styled-components";
import { darken } from "polished";
import useValidation from "../../../../hooks/useValidation";

const InputContainer = styled.div`
  position: relative;
  .message.error {
    margin-top: 0.4rem;
    font-size: 0.9rem;
    color: red;
  }
`;

const Label = styled.label`
  color: #666;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 0.04rem;
`;

const InputBase = css`
  all: unset;
  width: 100%;
  box-sizing: border-box;
  height: 48px;
  background: #eff2f6;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  color: #19224d;
  transition: all 0.3s;
  &[type="file"] {
    padding: 0.6rem 1rem;
  }
  &:focus:optional {
    box-shadow: 0 0 0 2px #355dff;
  }
  &:focus:required {
    box-shadow: 0 0 0 2px red;
  }
  &:focus:invalid {
    box-shadow: 0 0 0 2px red;
  }
  &:required:focus:valid {
    box-shadow: 0 0 0 2px #4ebf66;
  }
`;

const Wrapper = styled.input`
  ${InputBase}
`;

const Input: React.FC<{
  label?: string;
  onInput?: () => void;
  onBlur?: () => void;
}> = (props) => {
  const { label, onInput, onBlur } = props;
  const [message, validate] = useValidation();

  const validateOnInput = (e) => {
    validate(e);
    if (typeof onInput === "function" && onInput !== undefined) {
      onBlur();
    }
  };

  return (
    <InputContainer>
      <Label>{label}</Label>
      <Wrapper {...props} onBlur={validateOnInput} onInvalid={validate} />
      {message.type !== "error" ? null : (
        <div className={`message ${message.type}`}>{message.message}</div>
      )}
    </InputContainer>
  );
};

export default Input;
