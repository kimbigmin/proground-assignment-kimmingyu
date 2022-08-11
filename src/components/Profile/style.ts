import styled from "styled-components";

export const Layout = styled.section`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  transition: all 1s;
  background-color: #0000008c;

  .profile-box {
    max-width: 49rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: white;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    height: 20rem;
    position: absolute;

    left: 0;
    right: 0;
    bottom: 0;
    animation-duration: 0.5s;
    animation-name: slide;
    animation-direction: alternate;
    animation-iteration-count: 1;

    @keyframes slide {
      from {
        transform: translateY(100%);
      }

      to {
        transform: translateY((0%));
      }
    }

    h3 {
      font-size: 1.3rem;
      font-weight: 700;
    }

    .block-btn,
    .unblock-btn {
      background-color: black;
      border: 0;
      border-radius: 10px;
      color: white;
      width: 50%;
      padding: 0.5rem;
      font-weight: 600;
      font-size: 1.1rem;
    }

    .unblock-btn {
      background-color: white;
      color: black;
      border: solid 2px black;
    }

    .name {
      font-size: 1.2rem;
      font-weight: 600;
    }

    img {
      width: 5rem;
    }

    .top-bar {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;

      button {
        position: absolute;
        right: 10px;
        top: 15px;
        border: 0;
        background-color: transparent;
        font-weight: 700;
        font-size: 1rem;
      }
    }
  }
`;
