import React from "react";
import background2 from "../assets/Artboard 5.png";
import LogoTitle from "../assets/Artboard 3.png";
import "./style.scss";
import Partition from "./Partition";
import Component1 from "./Component1";

import Carousel from "./Carousel";

export default function Component2() {
  return (
    <>
      <Partition
        src={LogoTitle}
        link1={"HISTORY"}
        link2={"TEAMS"}
        to1={Component1}
        to2={Component2}
        className={"partitioner"}
      />
      <h1 className="header-page2 ">
        01.
        <h5>
          HISTORY
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            doloribus eius veniam cupiditate eveniet, accusamus asperiores
            corrupti dolor non fuga quod animi, quibusdam molestias ullam! Nisi
            cumque veritatis porro perspiciatis.
          </p>
        </h5>
      </h1>
      <img
        src={background2}
        className="className='bg-image img-fluid shadow-4'"
        alt="background"
      />
      <Carousel />
    </>
  );
}
