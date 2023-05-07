import styled from "styled-components";

const TodoStyles = styled.div`
  width: 970px;
  margin: 40px auto 0;

  .todo-list-inner {
    background: ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    padding: 30px;
  }

  .todo-list {
    border: 1px solid ${({ theme }) => theme.colors.black}1a;
    border-radius: 10px;
    overflow: hidden;
    &__item {
      padding: 10px 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;

      &:nth-child(odd) {
        background: ${({ theme }) => theme.colors.black}1a;
      }
    }

    &__text {
      p {
        margin: 0;
      }
    }

    &__action {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__title {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__button {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 1399px) {
    width: 80%;
  }

  @media only screen and (max-width: 1199px) {
    width: 100%;
  }

  @media only screen and (max-width: 767px) {
    .todo-list-inner {
      padding: 20px;
    }
  }
`;

export default TodoStyles;
