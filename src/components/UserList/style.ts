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
    width: 8rem;
    justify-content: space-between;
    margin-right: 5rem;

    img {
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }
  }

  .nick-name {
    width: 4rem;
  }

  .rank {
    width: 1rem;
  }

  .score {
    font-weight: 600;
    width: 3rem;
    text-align: right;
  }

  .blocked {
    margin: 0 auto;
  }
`;
