import styled from "styled-components";

const TodoStyles = styled.div`
  min-height: calc(100vh - 100px);
  background: ${({ theme }) => theme.colors.linearGradient};
  padding: 50px 0;

  .container {
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (max-width: 575px) {
    .container {
      max-width: 90%;
    }
  }
`;

export default TodoStyles;
