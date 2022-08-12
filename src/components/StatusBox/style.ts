import styled from "styled-components";

export const Layout = styled.article<{ type: string }>`
  max-width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 6rem;
  border-radius: 5px;
  padding: ${(props) => (props.type === "dailyScore" ? "0rem 0 1rem" : "1rem")};
  box-shadow: ${(props) =>
    props.type === "estimatedWalk" ? "rgba(0, 0, 0, 0.08) 0px 4px 12px" : ""};

  background: ${(props) =>
    props.type === "estimatedWalk" ? "rgb(255, 255, 255)" : ""};
  background: ${(props) =>
    props.type === "estimatedWalk"
      ? `linear-gradient(180deg, rgba(255,255,255,1) 75%, rgba(239,178,197,0.6587228641456583) 100%)`
      : ""};

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
    font-weight: 500;
    font-size: 0.9rem;
  }

  .top-text {
    font-weight: 700;
  }

  .bottom-text {
    color: gray;
  }
`;
