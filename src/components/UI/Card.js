import React from "react";

import "./Card.css";
const Card = (props) => {
  // 래퍼 컴포넌트로 인해 중복된 코드들을 방지할 수 있다.
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
