import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  margin: 1rem 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h2 {
    width: 100%;
    font-size: 1.1rem;
    font-weight: 700;
  }

  .more-view {
    font-size: 0.8rem;
    width: 5rem;
    background-color: transparent;
    border: 0;
    padding: 0;
    text-align: right;
    cursor: pointer;
    color: black;
    text-decoration: none;
    list-style: none;
  }
`;
