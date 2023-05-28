import React from "react";

const Wrapper = ({ children, passedStyle }) => {
  return <div passedStyle={JSON.stringify(passedStyle)}>{children}</div>;
};

export default Wrapper;
