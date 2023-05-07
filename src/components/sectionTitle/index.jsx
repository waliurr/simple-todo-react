import React from "react";
import styled from "styled-components";

const SectionTitleStyles = styled.div`
  margin-bottom: 30px;
  .title {
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
  }

  @media only screen and (max-width: 767px) {
    .title {
      font-size: 28px;
      line-height: 40px;
    }
  }
`;

const SectionTitle = ({ title }) => {
  return (
    <SectionTitleStyles>
      <h2 className="title">{title}</h2>
    </SectionTitleStyles>
  );
};

export default SectionTitle;
