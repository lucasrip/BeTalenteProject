import styled from "styled-components";
import colors from "../../styles/colors";

export const PageNotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  background: ${colors.gray.normal};
  align-items: center;
  height: 100vh;
  gap: 1rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    a {
      margin-top: 1rem;
      text-decoration: underline;
      text-underline-position: under;
      line-height: 2.5;
      font-weight: bold;
    }
  }
`;
