import styled from 'styled-components';

export default function Hashtag({ name, selected }) {
  return (
    <Hash
      className={`outer ${
        selected ? 'active' : null
      } relative  bg-gradient-to-r from-grad-one to-grad-two`}
    >
      <div
        className={`p-1 cont  ${
          selected ? 'active' : null
        } font-normal bg-primary text-sm flex items-center text-textLow`}
      >
        <p>#</p> <p className={`ml-1 `}>{name}</p>
      </div>
      <span className="one w-full border h-full "></span>
      <span className="two w-full h-full"></span>
    </Hash>
  );
}

const Hash = styled.button`
/* width: ${props => props.w};
margin-top: ${({ mt }) => (mt ? mt : '0px')};
height: ${({ h }) => (h ? h : '44px')}; */
width:85px;
height:30px;
  border-radius:4px;
    
&:hover, &.active{
    animation: loader 1s linear infinite;
    
    
     span:nth-child(1) {
      filter: blur(1.5px);
    }

    span:nth-child(2) {
      filter: blur(3px);
    }
}

    .cont,
    span {
  border-radius:4px;
    
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .cont {
      z-index: 7;
      width: 98%;
      height: 95%;
      letter-spacing:1.4px;
      
      &:hover, &.active{
             color:#d3cfcf;

      }
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
