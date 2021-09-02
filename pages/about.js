import styled from 'styled-components';

const about = props => {
  return (
    <Div>
      <section className="w-full h-screen bg-green-400 flex justify-center align-center">
        hello world from the about page
      </section>
      {console.log(props)}
    </Div>
  );
};

export default about;
// ________________
export async function getServerSideProps() {
  return {
    props: {
      name: 'ife'
    }
  };
}

// _______________
const Div = styled.div`
  background-color: red;
  width: 230px;
  height: 230px;
`;
