import styled from 'styled-components';
import Button from './Button';
import Glow from './Glow';

export default function Title() {
  return (
    <Pane className="pane  bg-gradient-to-r from-grad-one to-grad-two h-20 w-full p-0 mt-2">
      <div className="inner w-full border  flex h-full bg-primary items-center justify-between  p-4">
        <Glow text="Welcome" />
        <Button mt={false} w="70px" h="30px">
          Add
        </Button>
      </div>
    </Pane>
  );
}

const Pane = styled.div`
  div.inner {
    clip-path: polygon(0 0, 100% 0, 100% 81%, 0% 100%);
  }
`;
