import React, { useState } from 'react';
import Head from 'next/head';
import Chart from 'chart.js/auto';
import { BsBarChartFill } from 'react-icons/bs';
import { RiPieChartFill } from 'react-icons/ri';
import { SiJavascript } from 'react-icons/si';
import styled from 'styled-components';
import { FaThList } from 'react-icons/fa';
import SkillChart from '../components/Chart';
import SkillPie from '../components/Pie';
import SkillBar from '../components/SkillBar';

const SkillArr = [
  {
    progress: '20%',
    name: 'ReactJs',
    icon: <SiJavascript className="text-2xl" />
  },

  {
    progress: '70%',
    name: 'JavaScript',
    icon: <SiJavascript className="text-2xl" />
  },

  {
    progress: '30%',
    name: 'NodeJs',
    icon: <SiJavascript />
  },

  {
    progress: '90%',
    name: 'NextJs',
    icon: <SiJavascript />
  }
];

export default function Skills() {
  const [view, setView] = useState('normal');

  function changeView(view) {
    switch (view) {
      case 'normal':
        return <SkillBar skills={SkillArr} />;
      case 'pie':
        return <SkillPie />;
      case 'bar':
        return <SkillChart />;

      default:
        break;
    }
  }

  return (
    <div className="skills  w-full h-screen   flex flex-cols text-lg">
      <Head>
        <title>Skills</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full  w-full  ">
        <h1 className="about_skill text-xl">
          I adopt new technology very fast as long as it's got Documentations,
          <br />
          I'm very good at implementing while learning.
        </h1>
        s
        <div className="skill_level  mt-4 w-full">
          <div className="head flex justify-between mt-2 w-full  ">
            <p className="text"> Skill level</p>
            <Toggle className="toggle_container flex w-24 justify-between items-center">
              <FaThList
                className="toggle_icon"
                onClick={() => setView('normal')}
              />
              <BsBarChartFill
                className="toggle_icon"
                onClick={() => setView('bar')}
              />
              <RiPieChartFill
                className="toggle_icon"
                onClick={() => setView('pie')}
              />
            </Toggle>
          </div>
        </div>
        <div className="skills_components  mt-3">{changeView(view)}</div>
        <div className="w-full h-48 bg-text-glow-full">
          maybe the footer goes her
        </div>
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
