import styled from "styled-components";
import colors from "../../styles/colors";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.white.regular};
  width: 100%;
  height: 3.75rem;
  box-shadow: 0px 2px 8px 0px #00000033;

  a {
    margin-left: 1.3381rem;
  }
  img
  {
    width:5.6875rem
    height:34px
  }

  @media(max-width:790px)
  {
   a {
    margin-left: 0.6506rem;
    } 
  }

`;
