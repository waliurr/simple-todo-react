import styled from "styled-components";

const AddTodoStyles = styled.div`
  .addtodo_content {
    width: 570px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
  }

  input {
    width: calc(100% - 30px);
    background: ${({ theme }) => theme.colors.bgInput};
    border: 0;
    border-radius: 10px;
    padding: 11px 15px;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.white};

    &:focus {
      border: 0;
      outline: none;
      box-shadow: none;
    }
  }

  @media only screen and (max-width: 991px) {
    .addtodo_content {
      width: 80%;
    }
  }

  @media only screen and (max-width: 767px) {
    .addtodo_content {
      width: 100%;
    }
    input {
      padding: 10px 15px;
      font-size: 15px;
      line-height: 25px;
    }
  }
`;

export default AddTodoStyles;
