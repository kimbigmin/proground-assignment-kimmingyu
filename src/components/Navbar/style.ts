import styled from "styled-components";

export const Layout = styled.nav`
  max-width: 100%;
  display: flex;
  position: sticky;
  bottom: 0;
  padding: 1rem;
  align-items: center;
  justify-content: space-around;
  border-top: 0.1px solid #e6e6e6;
  background-color: #ffffff;
  z-index: 5;

  .point {
    color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 0.8rem;
      font-weight: 600;
    }
  }
`;
