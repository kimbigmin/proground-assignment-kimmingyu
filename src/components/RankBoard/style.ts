import styled from "styled-components";

export const Layout = styled.section<{ isForHome: boolean; isOpen: boolean }>`
  ${(props) => (props.isForHome ? "max-width: 90%" : "max-width: 100%")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 1.5rem;

  .rank-container {
    width: 100%;
    border-radius: 5px;
    overflow: ${(props) => (props.isOpen ? "hidden" : "")};
    box-shadow: ${(props) =>
      props.isForHome ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : "null"};
  }

  .loading {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h4 {
      font-weight: 600;
      margin-top: 10px;
    }
  }
`;
