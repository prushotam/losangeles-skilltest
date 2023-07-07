import React from "react";
import Logo from "../assets/Artboard 1.png";
import background1 from "../assets/Artboard 2.png";
import "./style.scss";

export default function Component1() {
  return (
    <>
      <img
        src={background1}
        className="className='bg-image img-fluid shadow-4'"
        alt="background"
      />
      <img src={Logo} alt="logo" className="img-logo" />
      <nav class="nav nav-list">
        <ul className="ul-list">
          <li>
            <a class="nav-link accordian" href="#">
              01 HISTORY
            </a>
          </li>
          <li>
            <a class="nav-link" href="#">
              02 TEAMS
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
