import React from "react";
import styled from "styled-components";

function NotFound() {
  return <Message>404 Error : Sorry Not Found 😓</Message>;
}

const Message = styled.h2`
  width: 100%;
  height: 100vh;
  font-size: 1.5rem;
  transform: translateY(50%);
  text-align: center;
  font-weight: 600;
  position: fixed;
`;

export default NotFound;
