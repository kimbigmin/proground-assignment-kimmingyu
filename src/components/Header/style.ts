import styled from "styled-components";

export const Layout = styled.header`
  max-width: 100%;
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  background-color: #ffffff;
  z-index: 5;

  .account-box {
    display: flex;
    align-items: center;
    width: 13rem;
    justify-content: space-around;
  }

  .page-title {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0 auto;
  }
`;
