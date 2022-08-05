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

    p {
      margin-right: 10px;
      font-size: 0.7rem;
      font-weight: 600;
      margin-top: 3px;
    }
  }
`;
