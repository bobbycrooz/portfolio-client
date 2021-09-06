import styled from 'styled-components';
import Button from './Button';
import Glow from './Glow';

export default function Title() {
  return (
    <Pane className="pane  bg-gradient-to-r from-grad-one to-grad-two h-20 w-full p-0">
      <div className="w-full flex h-full bg-primary items-center justify-between  p-4">
        <Glow text="Welcome" />
      </div>
    </Pane>
  );
}

const Pane = styled.div`
  div {
    clip-path: polygon(0 0, 100% 0, 100% 81%, 0% 100%);
  }
`;
