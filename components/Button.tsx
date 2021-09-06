import styled from 'styled-components';

export default function Button({ children, w, h, mt}) {
  return (
    <Btn className="outer  relative  bg-gradient-to-r mt-2 from-grad-one to-grad-two " w={w} h={h} mt={mt}>
      <button className="bg-primary text-md font-medium leading-4">
      
      {children}
      
      </button>
      <span className="one w-full border h-full "></span>
      <span className="two w-full h-full"></span>
    </Btn>
  );
}

const Btn = styled.div`
width: ${(props => props.w)};
margin-top: ${({mt}) => mt ? mt : '0px'};
height: ${({h}) => h ? h : '44px'};

  border-radius:4px;
    
&:hover{
    animation: loader 1s linear infinite;
    
     span:nth-child(1) {
      filter: blur(2px);
    }

    span:nth-child(2) {
      filter: blur(6px);
    }
}

    button,
    span {
  border-radius:4px;
    
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    button {
      z-index: 7;
      width: 97.3%;
      height: 92.3%;
      color:#fff;
      letter-spacing:1.4px;
    }

    span {
      background: inherit;
      width: 100%;
      height: 100%;
      
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
