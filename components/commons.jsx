import styled from 'styled-components';



export const RotateBG = styled.div`
width:100%;
height:100%;

  background: linear-gradient(
    90deg,
    hsla(347, 89%, 61%, 1) 0%,
    hsla(242, 42%, 40%, 1) 100%
  );


  animation: backgroundHue 4s linear infinite;

  @keyframes backgroundHue {
  
  
    0% {
      filter: hue-rotate(0deg);
    }

    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

export const ButtonOne = styled.div`
width:150px;
height:54px;

  background: linear-gradient(
    90deg,
    hsla(347, 89%, 61%, 1) 0%,
    hsla(242, 42%, 40%, 1) 100%
  );


  animation: backgroundHue 4s linear infinite;

  @keyframes backgroundHue {
  
  
    0% {
      filter: hue-rotate(0deg);
    }

    100% {
      filter: hue-rotate(360deg);
    }
  }
`;