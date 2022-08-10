import styled from "styled-components";

export const Layout = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  transform: translateY(60%);
  transition-property: transform;
  transition-duration: 0.7s;
`;
