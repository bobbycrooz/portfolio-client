import React, { useState } from 'react';
import styled from 'styled-components';
// import { SiJavascript } from 'react-icons/si';
const SkillBar = ({ skills }) => {
  return (
    <main className="skills_page  w-full h-full">
      {skills?.map((item, index) => (
        <Card
          key={index}
          className="p-2 border border-grad-two my-2 w-full bg-black rounded-lg"
        >
          <div className="header flex justify-between  ">
            <div className="tol_name flex justify-between items-center">
              {/* <SiJavascript className="text-2xl" /> */}
              {item.icon}
              <h1 className="name ml-4">{item.name}</h1>
            </div>

            <h1 className="percentage">{item.progress}</h1>
          </div>
          {/* <hr className="border-grad-one float-center mt-2   w-20" /> */}
          <Bar
            progress={item.progress}
            className="bar w-full h-6 bg-primary mt-3  p-1"
          >
            <div className="progress h-full bg-gradient-to-r from-grad-one l to-grad-two"></div>
          </Bar>
        </Card>
      ))}
    </main>
  );
};

const Card = styled.div``;

const Bar = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  .progress {
    /* width: 78%; */
    width: ${({ progress }) => progress};
  }
`;

export default SkillBar;
