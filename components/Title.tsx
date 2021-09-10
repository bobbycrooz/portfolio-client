import React, { useState } from 'react';

import styled from 'styled-components';
import Button from './Button';
import Glow from './Glow';
import { useRouter } from 'next/router';
import { SiAudiomack } from 'react-icons/si';

export default function Title() {
  const { pathname } = useRouter();
  const [audioOn, setAudioOn] = useState(false);
  const audio = new Audio('./track.mp3');

  function audioControl(ctrl) {
    // const soundTrack = document.getElementById('faded');

    if (ctrl) {
      audio.pause();
      audio.currentTime = 0;
      setAudioOn(false);
    } else {
      audio.play();
      setAudioOn(true);
    }
  }

  return (
    <Pane className="pane_title z-10 sticky bg-gradient-to-r from-grad-one to-grad-two h-20 w-full p-0">
      <div className="inner w-full  flex h-full bg-primary items-center justify-between  p-4">
        <Glow size={false} text={pathname.replace('/', ' ')} />
        {console.log(pathname)}
        {['/Projects', '/Skills'].includes(pathname) ? (
          <Button mt={false} w="70px" h="30px">
            Add
          </Button>
        ) : (
          <>
            <SiAudiomack
              onClick={() => audioControl(audioOn)}
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
