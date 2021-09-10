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
import Hashtag from '../components/Hashtag';

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
    <div className="skills  w-full h-full flex flex-cols text-lg">
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
            <header className="section_header text-4xl text-grad-one font-medium">
              <p className="w_i_">Skill level</p>
            </header>
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
        <section className="w-full  bg-primary border">
          <header className="section_header text-4xl text-grad-one font-medium">
            <p className="w_i_">What I can do?</p>
          </header>

          <section className="mt-4">
            <h1 className="p_one">
              I can build Awesome, Ssecure and interacive Web Apps with{' '}
              <span className="text-xl text-grad-one">ReactJs</span> and{' '}
              <span className="text-xl text-grad-one">NextJs</span>
              and Can manage the Backend fctionalty with{' '}
              <span className="text-xl text-grad-one">NodeJs</span>
              <br />
              With the knowledge of algorithm {'&'} data Structure i can
              Implement Complex features or Logics with
              <span className="text-xl text-grad-one">JavaScript</span>I use
              Styled_component and tailwindCss for designing interfaces.
            </h1>
          </section>
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
