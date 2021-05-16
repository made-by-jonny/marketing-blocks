import styled, { css } from "styled-components";
import { lighten, darken } from "polished";

interface Button {
  disabled?: boolean;
  loading?: boolean;
  variant?: string;
  href?: string;
}

const Wrapper = styled.button`
  all: unset;
  display: flex;
  max-width: 200px;
  height: 48px;
  border-radius: 0.5rem;
  min-height: 48px;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  box-sizing: border-box;
  background: #355ded;
  color: #fff;
  -webkit-text-fill-color: #fff;
  transition: all 0.3s;
  font-size: 1.1rem;
  i {
    font-size: 1.2rem;
    margin: 0 0.5rem;
  }
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => darken(0.05, "#355DED")};
  }
  &:disabled {
    pointer-event: none;
    background: ${({ theme }) => lighten(0.5, "#355DED")};
    cursor: loader;
  }
  &[data-loading="true"] {
    i {
      animation-name: spin;
      animation-duration: 2000ms;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }
  &[data-variant="small"] {
    height: 32px;
    padding: 0 1rem;
    font-size: 0.8rem;
  }
  &[data-variant="icon-only"] {
    background: none;
    color: #555;
    -webkit-text-fill-color: #555;
    height: 32px;
    padding: 0;
    font-size: 0.8rem;
    &:hover {
      color: ${darken(0.15, "#555")};
    }
  }
  &[data-variant="outline"] {
    background: none;
    color: #fff;
    -webkit-text-fill-color: #fff;
    border: 2px solid #fff;
    &:hover {
      background: none;
    }
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Button: React.FC<Button> = ({
  children,
  disabled,
  loading,
  variant,
  href,
  ...props
}) => {
  const as = href ? "a" : "button";

  return (
    <Wrapper
      className="button"
      as={as}
      {...props}
      data-variant={variant}
      disabled={disabled || loading}
      data-loading={loading}
    >
      {loading ? (
        <i className="fa fa-spinner" aria-hidden="true"></i>
      ) : (
        children
      )}
    </Wrapper>
  );
};

export default Button;
