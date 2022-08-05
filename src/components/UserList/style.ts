import styled from "styled-components";

export const Layout = styled.li`
  display: flex;
  padding: 1rem;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;

  .info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 9rem;

    img {
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }
  }

  .score {
    font-weight: 600;
  }
`;
