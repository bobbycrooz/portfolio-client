import styled from 'styled-components';
import Button from './Button';
import { AiFillGithub } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';

export default function Card({ item }) {
  return (
    <Main className=" bg-gradient-to-r from-grad-one to-grad-two ">
      <span className="one w-full border h-full "></span>
      <span className="two w-full h-full"></span>
      <div className="main_componenst flex flex-col bg-primary">
        <div className="cover">
          <button className="star absolute w-auto px-1 flex justify-center items-center bg-primary right-0 ">
            👍 23
          </button>
          {/* <img src={item.img.src} alt="" className="w-full h-full" />
          {console.log(item)} */}
        </div>

        <div className="info bg-body  w-full text-lg p-2">
          <h2 className="project_name text-2xl  font-bold">Ajoo CMS</h2>
          <div className="project_description">
            <p className="text-left text-lg font-normal text-textLow">
              this website contains a fed isolated content
            </p>
          </div>

          <div className="tech_stack flex justify-end">
            <p className="stack text-md text-textLow">ReactJs | NextJs</p>
          </div>

          <div className="action_container flex justify-end space-x-6 mt-2">
            <FaGlobe className="text-grad-one text-lg" size={30} />

            <AiFillGithub className="text-grad-one text-lg" size={30} />
          </div>
        </div>
      </div>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 250px;

  position: relative;

  span {
    position: absolute;
    background: inherit;
    z-index: 2;
  }

  .main_componenst {
    position: absolute;
    top: 1.3px;
    left: 1.3px;
    right: 1.3px;
    bottom: 1.3px;

    z-index: 7;

    &:hover {
      .cover {
        height: 30%;
        transition: all 0.2s linear;
      }
      .info {
        height: 70%;
        transition: all 0.2s linear;
      }
    }

    .cover {
      height: 60%;
      transition: all 0.2s linear;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        background: #090909;
        opacity: 0.5;
        width: 100%;
        height: 100%;
      }
    }
    .info {
      height: 40%;
      transition: all 0.2s linear;
    }
  }
`;
