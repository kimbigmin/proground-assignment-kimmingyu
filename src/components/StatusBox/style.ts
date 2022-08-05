import styled from "styled-components";

export const Layout = styled.article<{ type: string }>`
  max-width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 6rem;
  padding: ${(props) => (props.type === "dailyScore" ? "0rem 0 1rem" : "1rem")};

  .walk-number {
    font-size: 1.4rem;
    font-weight: 800;
    margin-right: 5px;
  }

  .unit {
    font-weight: 700;
  }

  .top-text,
  .bottom-text {
    font-weight: 600;
    font-size: 0.9rem;
  }

  .top-text {
    font-weight: 700;
  }

  .bottom-text {
    color: gray;
  }
`;
