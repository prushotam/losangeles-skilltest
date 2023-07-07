import React from "react";
import "./style.scss";

export default function Partition({
  src,
  link1,
  link2,
  to1,
  to2,
  className,
  children,
}) {
  return (
    <div className={className}>
      <img src={src} alt="logo-title" className="img-fluid shadow-2-stong" />
      <div>{children}</div>
      <ul className="ul-list">
        <li>
          {" "}
          <a href={to1}> {link1}</a>
        </li>
        <li>
          <a href={to2}>{link2}</a>
        </li>
      </ul>
    </div>
  );
}
