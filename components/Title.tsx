import styled from 'styled-components';




export default function Title() {
  return (
    <Pane className="pane bg-gradient-to-r mt-2 from-grad-one to-grad-two h-20 w-full p-0">
      <div className="w-full h-full bg-primary  flex  items-center text-textLow font-bold text-5xl font-joe  p-4">
          Welcome</div>
    </Pane>
  );
}

const Pane = styled.div`
  div {
    clip-path: polygon(0 0, 100% 0, 100% 81%, 0% 100%);
  }
`;
