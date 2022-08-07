import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  width: 10rem;
  border-radius: 10px;
  background-color: #eaeaea;
  padding: 0.4rem;
  margin-right: 15px;
  align-items: center;

  li {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 600;
  }

  p {
    padding: 3px 3px 0 3px;
  }
`;
