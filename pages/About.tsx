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

export default function About() {
  const [view, setView] = useState('normal');

  return (
    <div className="skills  w-full h-full flex flex-cols text-lg">
      <Head>
        <title>About me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full p-2  w-full">
        <div className="img_cont w-full h-48 bg-textLow">
          <p>i code the web</p>
          {/* <Image src="" /> */}
        </div>

        <section className="more_info mt-2">
          <p className="more_text">
            My nick name is Bobby and i love to use that at my work space, i
            love to make people love web apps by giving it an outstanding look
            and feel, also make all interactions and experience great
            <br />
            <br />
            i'm currently pursuing a degree in Electronics and Computer
            Engineering (4th level of 5) width outstanding perfomace. 👩‍🎓
            <br />
            <br />
            I'm a foodie 🍕 person, i get more energy from it, and makes me
            spend more time working without getting burnout or stressed out,
            <br />
            <br />i spend few and idle times watching movies for playing
            football ⚽ , i love connecting with people and brainstorming on
            complex tasks.
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
