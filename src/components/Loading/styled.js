import styled from 'styled-components'

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20%;
`

export const ImgLoading = styled.img`
  animation: rotate 2s linear infinite;
  width: 200px;
  height: 200px;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`
