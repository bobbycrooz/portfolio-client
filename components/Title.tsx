import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import Button from './Button';
import Glow from './Glow';
import { useRouter } from 'next/router';
import { SiAudiomack } from 'react-icons/si';

export default function Title() {
  const { pathname, push } = useRouter();
  const [audioOn, setAudioOn] = useState(false);
  const [audio] = useState(
    typeof Audio !== 'undefined' && new Audio('./track.mp3')
  );

  useEffect(() => {
    audioOn ? audio.play() : audio.pause();
  }, [audioOn]);

  return (
    <Pane className="pane_title z-10 sticky bg-gradient-to-r from-grad-one to-grad-two h-20 w-full p-0">
      <div className="inner w-full  flex h-full bg-primary items-center justify-between  p-4">
        <Glow size={false} text={pathname.replace('/', ' ')} />
        {console.log(pathname)}
        {['/Projects', '/Skills'].includes(pathname) ? (
          <Button
            t="button"
            click={() => push('/Admin')}
            mt={false}
            w="70px"
            h="30px"
          >
            Add
          </Button>
        ) : (
          <>
            <SiAudiomack
              onClick={() => setAudioOn(p => !p)}
              size={30}
              color={audioOn ? '#f44369' : '#474747'}
            />
          </>
        )}
      </div>
    </Pane>
  );
}

const Pane = styled.div`
  div.inner {
    clip-path: polygon(0 0, 100% 0, 100% 81%, 0% 100%);
  }
`;
