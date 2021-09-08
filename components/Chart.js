import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const data = {
  labels: ['React', 'TS', 'NextJs', 'Node', 'Tailwind', 'JavaSCript'],
  datasets: [
    {
      label: 'tools',
      data: [90, 40, 50, 55, 78, 30],
      backgroundColor: '#3E3B92',
      borderRadius: 10,
      barThickness: 20,
      borderColor: '#3E3B92',
      barPercentage: '100%'
    }
  ]
};

const options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};

export default function SkillChart() {
  return (
    <Barchart className="barchart bg-primary  mt-3 w-full">
      <Bar
        data={data}
        options={options}
        responsive={true}
        className=" w-full"
      />
    </Barchart>
  );
}

const Barchart = styled.div`
  height: 270px;
`;
