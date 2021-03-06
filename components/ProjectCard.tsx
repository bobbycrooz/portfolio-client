import styled from 'styled-components';
import Button from './Button';
import { AiFillGithub } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { AiFillLike } from 'react-icons/ai';
import Image from 'next/image';

export default function Card({ item }) {
  return (
    <Main className="border border-grad-two rounded-md">
      {/* <span className="one w-full border h-full "></span>
      <span className="two w-full h-full"></span> */}
      <div className="main_component rounded-md  bg-primary">
        {/* <div className="cover">
        </div> */}

        {console.log()}

        <Image
          src={item.img}
          alt=""
          layout="fill"
          className="w-full h-full rounded-md"
        />
        <div className="info bg-body  w-full text-lg p-2 rounded-b-md">
          <div className="name_container flex justify-between rounded-md">
            <h2 className="project_name text-secondary text-2xl font-bold mt-2">
              Ajoo CMS
            </h2>
            <button className="star  w-auto px-1 flex justify-center items-center    ">
              <AiFillLike className="text-grad-two" />
              <span className="count ml-1 readabl">23</span>
            </button>
          </div>

          <div className="project_description mt-1 ">
            <p className="text-left readable">
              this website contains a fed isolated contentand helping ohers do
              thires.
            </p>
          </div>

          <div className="tech_stack mt-2 flex justify-between text-md text-textLow">
            <p className="stack">ReactJs | NextJs</p>

            <p className="track mr-2">
              <i>~FrontEnd</i>
            </p>
          </div>

          <div className="action_container flex  justify-center space-x-8 mt-3">
            <FaGlobe className="action_icon text-lg text-secondary" />

            <AiFillGithub className="action_icon  text-lg text-secondary" />
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
  transition: all 0.2s linear;

  &:hover {
    box-shadow: 0 7px 25px -12px #4b46f1c3;
  }

  .main_component {
    position: relative;
    height: 100%;
    z-index: 7;

    &:hover {
      &::before {
        content: '';
        position: absolute;
        background: #090909;
        border-radius: 7px;
        opacity: 0.5;
        width: 100%;
        height: 100%;
      }

      .info {
        height: 80%;
        transition: all 0.2s linear;
      }
    }

    /* .cover {
        height: 60%;
        transition: all 0.2s linear;
        position: relative;

        height: 100%;
      } */

    .info {
      position: absolute;
      height: 50%;
      width: 100%;
      /* height: 100%; */
      bottom: 0;
      clip-path: polygon(0 10%, 100% 0, 100% 100%, 0% 100%);

      transition: all 0.2s linear;

      .action_icon {
        color: #8d8d8d;
        transition: all 0.2s linear;
        font-size: 25px;
        &:hover {
          transform: scale(1.3);
          color: #f44369;
          /* transition: all 0.2s linear; */
        }
      }
    }
  }
`;
