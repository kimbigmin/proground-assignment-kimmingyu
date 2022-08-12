import styled from "styled-components";

export const Layout = styled.div<{ percent: number }>`
  height: 0.9rem;
  border-radius: 10px;
  background-color: #eaeaea;
  width: 100%;

  span {
    width: ${(props) => props.percent}%;
    height: 0.9rem;
    background-color: #efb2c5;
    position: relative;
    border-radius: 10px;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: right;
    transition-property: width;
    transition-duration: 0.5s;

    animation-name: gaugeAnimation;
    animation-duration: 1.5s;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
    animation-direction: alternate;

    @keyframes gaugeAnimation {
      from {
        width: 0%;
      }
      to {
        width: ${(props) => props.percent}%;
      }
    }
  }

  p {
    margin-right: 8px;
    font-size: 0.7rem;
    transition-delay: 1s;
    font-weight: 600;

    animation-name: percentAnimation;
    animation-duration: 1.5s;
    animation-timing-function: linear;

    @keyframes percentAnimation {
      0% {
        font-size: 0rem;
      }
      40% {
        font-size: 1rem;
        color: red;
      }
      60% {
        font-size: 1.5rem;
      }
      90% {
        font-size: 1rem;
      }
      100% {
        font-size: 0.7rem;
      }
    }
  }
`;
