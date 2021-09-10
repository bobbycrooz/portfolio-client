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
import Button from '../components/Button';
import git from '../public/gituse.png';
import link from '../public/linkone.jpeg';
import tweet from '../public/tweet.jpeg';
import what from '../public/whatone.jpeg';

export default function Contact() {
  const [view, setView] = useState('normal');

  return (
    <div className="skills  w-full h-full  flex flex-col text-lg">
      <Head>
        <title>Skills</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="available w-full ">
        <h1 className="text-2xl">I'm currently available for :</h1>

        <div className="jobs_container mt-4  flex w-full">
          <div className="status_container flex flex-col justify-between h-32 spacing-y-3">
            <Status className="status active flex items-center  p-1 px-3">
              <span className="dot rounded-full"></span>{' '}
              <p className="ml-3 ">Remote</p>
            </Status>

            <Status className="status active flex items-center  p-1 px-3">
              <span className="dot rounded-full"></span>{' '}
              <p className="ml-3 ">freelance</p>
            </Status>

            <Status className="status  flex items-center  p-1 px-3">
              <span className="dot rounded-full"></span>{' '}
              <p className="ml-3 ">Fultime</p>
            </Status>
          </div>

          <div className="ml-3  w-full flex items-center justify-center ">
            <h1 className="job_text font-joe">Jobs</h1>
          </div>
        </div>
      </div>

      <main className="h-full  w-full contact_form  mt-3">
        <header className="section_header text-4xl text-grad-one font-medium">
          <p className="w_i_">Drop a Message</p>
        </header>

        <form
          action=""
          className="contact  flex mt-3 flex-col w-full space-y-4"
        >
          <div className="field_container relative w-full h-16 border border-grad-one ">
            <input
              type="text"
              name=""
              id=""
              className="bg-primary  focus:outline-none  placeholder-textLow text-textLow w-full h-full text-xl px-3"
              placeholder="Your Name"
            />
            <span className="error absolute"></span>
          </div>

          <div className="field_container border border-grad-two  relative w-full h-16">
            <input
              type="text"
              name=""
              id=""
              placeholder="Email"
              className="bg-primary   focus:outline-none   placeholder-textLow text-textLow w-full h-full text-xl px-3"
            />
            <span className="error absolute"></span>
          </div>

          <div className="field_container border border-grad-two  relative w-full h-24">
            <textarea
              className="bg-primary   focus:outline-none  placeholder-textLow text-textLow  text-xl px-3 w-full h-full"
              name=""
              id=""
              placeholder="message for me"
            ></textarea>
            <span className="error absolute "></span>
          </div>

          <Button mt={false} w="120px" h="39px">
            Drop
          </Button>
        </form>

        <section className="social_media border w-full mt-6">
          <header className="section_header text-4xl text-grad-one font-medium">
            <h1 className="find_me">Let's Socialize</h1>
          </header>

          <div className="social_media_card_container grid gap-2 grid-cols-2 mt-3">
            <div className="social_media_card h-36 w-full border">
              <Git className="github w-full h--top-full">
                {/* <img src={git} alt="" /> */}
                <Image src={git} />
                git hub card here
              </Git>
            </div>

            <div className="social_media_card h-36 w-full border">
              <Link className="github w-full h-full ">git hub card here</Link>
            </div>

            <div className="social_media_card h-36 w-full border">
              <Tweet className="github w-full h-full ">git hub card here</Tweet>
            </div>

            <div className="social_media_card h-36 w-full border">
              <What className="github w-full h-full ">git hub card here</What>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const Status = styled.div`
  border: 1px solid #6d6d6d;
  border-radius: 15px;
  color: #6d6d6d;
  &.active {
    border: 1px solid #116311;
    color: #fff;

    .dot {
      background: #03d403;
      box-shadow: 0 0 10px #47fd47f2, 0 0 30px #47fd47f2, 0 0 40px #47fd47ed,
        0 0 60px #52f752e8, 0 0 100px #52f752df;
    }
  }

  .dot {
    transition: all 0.2s linear;
    width: 7px;
    height: 7px;

    background: #6d6d6d;
  }
`;

const Git = styled.div`
  background-image: url(${git});
`;
const Link = styled.div`
  background-image: url(${link});
`;

const Tweet = styled.div`
  background-image: url(${tweet});
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const What = styled.div`
  background-image: url(${what});
`;
