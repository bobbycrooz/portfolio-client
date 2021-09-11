import styled from 'styled-components';

export default function Glow({ text, size }) {
  return (
    <Text className="font" s={size}>
      {text}
    </Text>
  );
}

const Text = styled.h2`
  /* position: relative; */
  margin-top: -8px;
  font-weight: 600;
  font-size: ${({ s }) => (s ? s : '36px')};
  /* color: #f44369;
  #373737 */
  letter-spacing: 1px;
  line-height: 1em;

  -webkit-box-reflect: below 0 linear-gradient(transparent, #0002);
  animation: glows 5s linear infinite;

  @keyframes glows {
    0%,
    18%,
    20%,
    50.1%,
    60.1%,
    65.1%,
    80%,
    90.2%,
    92% {
      color: #373737;
      text-shadow: none;
    }
    18.1%,
    20.1%,
    30%,
    50%,
    60.1%,
    65%,
    80.1%,
    90%,
    92.1%,
    100% {
      color: #ccb6ba;
      text-shadow: 0 0 10px #f71949, 0 0 20px #f71949;
    }
  }
`;

// , 0 0 10px #f71949,
//         0 0 40px #f71949
// 0 0 80px #f71949, 0 0 160px #f71949
