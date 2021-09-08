import { Spin as Hamburger } from 'hamburger-react';
import styled from 'styled-components';
import { RotateBG } from './commons';
import Link from 'next/link';
export default function Header() {
  return (
    <div className="navbar bg-primary z-10 sticky top-0 h-20 flex justify-between items-center shadow-md w-full  p-2">
      <h1 className=" text-textLow font-black font-logo text-3xl">Idris</h1>

      <Menu>
        <RotateBG className="menu_bg rounded-lg">
          <div className="menu_cover flex items-center justify-between bg-primary rounded-lg">
            <div className="nav-links text-lg font-joe text-textLow font-bold  p-1 w-full flex items-center justify-around">
              <Link href="/">
                <a>About</a>
              </Link>

              <Link href="/Contact">
                <a>Skills</a>
              </Link>

              <Link href="/Projects">
                <a>Project</a>
              </Link>

              <Link href="/Skills">
                <a>Contact</a>
              </Link>
            </div>

            <div className="menu_icon">
              <Hamburger
                color="#C3C3C3"
                toggled={false}
                direction="right"
                size={20}
              />
            </div>
          </div>
        </RotateBG>
      </Menu>
    </div>
  );
}

const Menu = styled.h1`
  /* width: 48px; */
  width: 80%;

  .menu_bg {
    padding: 1px;

    .nav-links {
      /* display: none; */

      a {
      }
    }
  }
`;
