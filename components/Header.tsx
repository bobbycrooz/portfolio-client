import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import styled from 'styled-components';
import { RotateBG } from './commons';
import Link from 'next/link';

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="navbar bg-primary z-10 sticky top-0 h-20 flex justify-between items-center shadow-md w-full p-2  ">
      <Link href="/">
        <a className=" text-grad-one font-black font-logo ml-2 text-3xl">
          Idris
        </a>
      </Link>

      <Menu className={showNav && 'active overflow-hidden'}>
        <RotateBG className="menu_bg overflow-hidden rounded-lg h-full">
          <div className="menu_cover overflow-hidden h-full flex items-center justify-between bg-primary rounded-lg">
            <div className="nav-links  text-lg font-joe font-medium  p-1 w-full flex items-center justify-around">
              <Link href="/Projects">
                <a>Projects</a>
              </Link>

              <Link href="/Skills">
                <a>Skills</a>
              </Link>

              <Link href="/Contact">
                <a>Contact</a>
              </Link>

              <Link href="/About">
                <a>About</a>
              </Link>
            </div>

            <div className="menu_icon visible  absolute right-1">
              <Hamburger
                color="#C3C3C3"
                direction="right"
                onToggle={() => setShowNav(pre => !pre)}
                size={25}
                toggled={showNav}
              />
            </div>
          </div>
        </RotateBG>
      </Menu>
    </div>
  );
}

const Menu = styled.h1`
  width: 48px;
  height: 100%;
  transition: all 0.2s linear;
  /* border: 1px solid red; */
  /* padding: 2px; */
  visibility: hidden;

  &.active {
    width: 80%;
    visibility: visible;

    .nav-links {
      display: flex;
      visibility: visible;
      opacity: 1;
      /* border: 1px solid red; */

      a {
        &:hover {
          color: #f44369;
        }
      }
    }
  }

  .menu_bg {
    padding: 1.7px;
  }

  .nav-links {
    display: none;
    opacity: 0.2;
    width: calc(100% - 38px);
    /* visibility: hidden; */
    a {
      color: #c3c3c3;
    }
  }

  /* * {
    border: 1px solid red;
  } */
`;
