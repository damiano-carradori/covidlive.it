import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

export const AnimatedPlaceholder = styled.div`
  position: relative;
  overflow: hidden;
  height: 1em;
  width: 100%;
  max-width: 100%;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.08);

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0)
    );
    transform: translateX(-100%);
    animation: 1s ${shimmer} infinite;
  }
`;
