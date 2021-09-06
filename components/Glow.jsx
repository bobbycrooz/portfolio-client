import styled from 'styled-components';

export default function Glow({ text }) {
  return <Text className="">{text}</Text>;
}

const Text = styled.h2`
  position: relative;
  font-weight: 600;
  font-size: 36px;
  color: #f44369;
  letter-spacing: 1px;
  line-height: 0.8em;
  /* -webkit-box-reflect: below 1px linear-gradient(transparent, #c0151544); */
  -webkit-box-reflect: below 0 linear-gradient(transparent, #0004);
`;
