import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

const data = {
  labels: ['React', 'TS', 'NextJs', 'Node', 'Tailwind', 'JavaSCript'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ]
};

export default function SkillPie() {
  return (
    <main className="h-full  ">
      <Barchart className="barchart   my-4 w-full">
        <Doughnut data={data} responsive={true} className=" w-full" />
      </Barchart>
    </main>
  );
}

const Barchart = styled.div`
  /* height: 270px; */
  width: 100%;
`;
