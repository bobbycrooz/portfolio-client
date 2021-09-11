import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Chart from 'chart.js/auto';
import { BsBarChartFill } from 'react-icons/bs';
import { RiPieChartFill } from 'react-icons/ri';
import { SiJavascript } from 'react-icons/si';
import styled from 'styled-components';
import { FaThList } from 'react-icons/fa';
import SkillChart from '../components/Chart';
import SkillPie from '../components/Pie';
import SkillBar from '../components/SkillBar';
import Hashtag from '../components/Hashtag';
import bob from '../public/bob.png';

export default function About() {
  const [view, setView] = useState('normal');

  return (
    <div className="skills  w-full h-full flex flex-cols text-lg">
      <Head>
        <title>About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full p-2  w-full">
        <div className="img_cont  w-full h-48 border-b border-grad-two">
          <p className="text-textLow font-bold text-3xl  font-joe">
            Disciplined
            <br />
            Developer
          </p>
          {/* <Image src={bob} className="bob w-full h-48 border" /> */}
        </div>

        <section className="more_info mt-2">
          <p className="more_text readable">
            I prefer to be called by my Nick, BobbyDev({' '}
            <span className="font-logo text-grad-one">bd</span> ) and I love to
            use that at my work space, I care more about users comfortability
            with web Apps by giving it an outstanding look and feel by
            implementing great user interactions and experience.
            <br />
            <br />
            I'm currently pursuing a degree in Electronics and Computer
            Engineering (4th level of 5) width outstanding perfomace. 👩‍🎓
            <br />
            <br />
            I'm a foodie 🍕 person, I get more energy from it, and it makes me
            spend more time working without getting burnout or stressed out,
            <br />
            <br />I spend few and idle times watching movies or playing football
            ⚽, I love connecting with people and brainstorming on complex
            tasks, and also impaccting knowledge into others.
          </p>
        </section>
      </main>
    </div>
  );
}

const Toggle = styled.div`
  transition: all 0.2s linear;

  .toggle_icon {
    font-size: 22px;
    &:hover,
    &.active {
      color: #f44369;
      transform: scale(1.1);
    }
  }
`;
