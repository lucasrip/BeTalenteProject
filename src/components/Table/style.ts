import styled from "styled-components";
import colors from "../../styles/colors";

export const TableContainer = styled.div`
  width: 60rem;
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 44px;

  .openMoreInformations {
    display: none;
  }

  @media (max-width: 580px) {
    .noMobile {
      display: none;
    }

    .openMoreInformations {
      display: flex;
      justify-content: center;
      align-items: center;

      th img {
        width: 8px;
        height: 8px;
      }
      td img {
        width: 17px;
        height: 9px;
      }
    }
  }

  @media (max-width: 1015px) {
    width: 93%;
  }
`;

export const Header = styled.header`
  display: flex;
  height: auto;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  h1 {
    font-weight: 500;
    font-size: 1.25rem;
    font-family: "Helvetica Neue", sans-serif;
    color: ${colors.black.regular};
  }

  div,
  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 17.9375rem;
    height: 48px;
    border: solid 1px ${colors.gray.bold};
    background: ${colors.white.regular};
    border-radius: 8px;
    padding: 12px 16px 12px 16px;
    gap: 2rem;

    input,
    select {
      width: 80%;
      height: 19px;
      border: 0px;
      background: transparent;
      color: ${colors.gray.normalBold};
      font-size: 1rem;
      font-family: "Helvetica Neue", sans-serif;
      font-weight: 400;
    }

    img {
      height: 24px;
      height: 24px;
      cursor: pointer;
    }
    button {
      border: 0px;
      background: transparent;
    }
  }

  @media (max-width: 580px) {
    flex-direction: column;
    gap: 2rem;
    align-items: start;

    div {
      width: 100%;
    }
  }
`;

export const TableContent = styled.table`
  width: 100%;
  height: auto;
  border-collapse: separate;
  border-spacing: 0 3px;
  text-align: left;
  overflow: auto;
  border-radius: 8px;
  thead {
    width: 60.0625rem;
    height: 47px;
    box-shadow: 0px 1px 2px 0px #00000033;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    tr {
      th {
        height: 47px;
        font-family: "Helvetica Neue", sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        color: ${colors.white.regular};
        background-color: ${colors.blue.normal};
        font-size: 1rem;
      }

      & th:first-child {
        border-top-left-radius: 8px;
        padding-left: 2rem;
      }

      & th:nth-last-child(2),
      & th:last-child {
        border-top-right-radius: 8px;
      }
    }
  }

  tbody {
    tr {
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      background: ${colors.white.regular};
      position: relative;

      td {
        font-family: "Helvetica Neue", sans-serif;
        height: 49px;
        img {
          width: 34px;
          height: 34px;
          border-radius: 50%;
        }
      }
      & > td:first-child {
        padding-left: 2rem;
      }
    }
  }
`;

export const NoItems = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
