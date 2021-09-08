import styled from 'styled-components';
import Button from './Button';
import Glow from './Glow';
import { useRouter } from 'next/router';

export default function Title() {
  const { pathname } = useRouter();

  return (
    <Pane className="pane  bg-gradient-to-r from-grad-one to-grad-two h-20 w-full p-0 mt-2">
      <div className="inner w-full  flex h-full bg-primary items-center justify-between  p-4">
        <Glow text={pathname.replace('/', '_')} />
        {console.log(pathname)}
        {['/Projects', '/Skills'].includes(pathname) ? (
          <Button mt={false} w="70px" h="30px">
            Add
          </Button>
        ) : null}
      </div>
    </Pane>
  );
}

const Pane = styled.div`
  div.inner {
    clip-path: polygon(0 0, 100% 0, 100% 81%, 0% 100%);
  }
`;
