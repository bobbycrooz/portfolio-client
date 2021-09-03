import styled from 'styled-components';

export default function Button({ children }) {
  return (
    <Btn className="outer  relative w-20 h-16 bg-gradient-to-r mt-2 from-grad-one to-grad-two  rounded-3xl">
      <button className="bg-primary  rounded-3xl text-2xl">{children}</button>
      <span className="one w-full border h-full rounded-3xl"></span>
      <span className="two w-full h-full rounded-3xl "></span>
    </Btn>
  );
}

const Btn = styled.div`
    /* background: linear-gradient(#fcd34d, #ec4899, #6ee7b7); */

&:hover{
    animation: loader 1s linear infinite;

}
    button,
    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    button {
      z-index: 7;
      /* width: 150px;
      height: 70px; */
      color:#fff;
    }

    span {
      background: inherit;
      width: 100%;
      height: 100%;
      
    }

    span:nth-child(1) {
      filter: blur(7px);
    }

    span:nth-child(2) {
      filter: blur(12px);
    }
  }

  @keyframes loader {
    0% {
      filter: hue-rotate(0deg);
    }

    100% {
      filter: hue-rotate(360deg);
    }
`;
