import styled, { css } from "styled-components";

const ButtonStyles = styled.button`
  background: ${({ theme }) => theme.colors.linearGradientButton};
  border: 0;
  border-radius: 10px;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  gap: 15px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:focus {
    box-shadow: none;
    outline: none;
  }

  ${({ variant }) =>
    variant == "edit" &&
    css`
      background: transparent;
      padding: 0;
      color: ${({ theme }) => theme.colors.green};
    `}

  ${({ variant }) =>
    variant == "delete" &&
    css`
      background: transparent;
      padding: 0;
      color: ${({ theme }) => theme.colors.red};
    `}


  @media only screen and (max-width: 767px) {
    padding: 8px 20px;
    font-size: 16px;
    line-height: 26px;

    ${({ variant }) =>
      variant == "edit" &&
      css`
        padding: 0;
      `}

    ${({ variant }) =>
      variant == "delete" &&
      css`
        padding: 0;
      `}
  }
`;

export default ButtonStyles;
