import React, { useState } from "react";
import "./style.scss";

export default function Wrapper({
  item1,
  item2,
  footerLogo,
  copyrightText,
  children,
  onClickItem1,
  onClickItem2,
}) {
  const [activeItem, setActiveItem] = useState(item1);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li
            className={activeItem === item1 ? "active" : ""}
            onClick={() => {
              handleItemClick(item1);
              onClickItem1();
            }}
          >
            {item1}
          </li>
          <li
            className={activeItem === item2 ? "active" : ""}
            onClick={() => {
              handleItemClick(item2);
              onClickItem2();
            }}
          >
            {item2}
          </li>
        </ul>
      </nav>
      <div className="renderer">{children}</div>
      <footer className="footer">
        <img src={footerLogo} alt="Footer Logo" />
        <p>{copyrightText}</p>
      </footer>
    </div>
  );
}
