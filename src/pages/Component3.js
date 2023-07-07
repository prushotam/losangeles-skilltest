import React, { useState } from "react";
import Partition from "./Partition";
import partitionItem1 from "../assets/Artboard 8.png";
import Wrapper from "./Wrapper";
import Image from "../assets/Artboard 10.png";
import Image2 from "../assets/Artboard 2.png";
import FooterLogo from "../assets/Artboard 11.png";

export default function Component3() {
  const [image, setImage] = useState(Image);

  const handleClickItem1 = () => {
    setImage(Image);
  };

  const handleClickItem2 = () => {
    setImage(Image2);
  };

  return (
    <>
      <Partition
        src={partitionItem1}
        className={"partitioner-2"}
        children={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit ad
            repellendus alias dicta eaque labore aperiam deserunt fugit, velit,
            maxime rem quaerat atque ipsum officia aliquid commodi saepe
            necessitatibus laborum.
          </p>
        }
      />
      <Wrapper
        item1={"MOUNTAIN1"}
        item2={"MOUNTAIN2"}
        onClickItem1={() => handleClickItem1()} // Pass the function reference
        onClickItem2={() => handleClickItem2()} // Pass the function reference
        footerLogo={FooterLogo}
        copyrightText={"COPYRIGHT 2016. ALL RIGHTS RESERVED"}
      >
        <img
          src={image}
          alt="Mountains"
          style={{ height: "100%", width: "100%" }}
        />
      </Wrapper>
    </>
  );
}
