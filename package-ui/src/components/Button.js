import React, { useEffect, useState } from "react";

function Button({ children, passedStyle = null, id = "default" }) {
  const buttonRef = React.useRef(null);
  const [style, setStyle] = useState({});
  useEffect(() => {
    let { current } = buttonRef;
    while (current != null) {
      if (current.getAttribute("passedStyle")) {
        const passedStyle = JSON.parse(current.getAttribute("passedStyle"));
        const style = passedStyle.button[id];
        setStyle(style);
        break;
      }
      current = current.parentNode;
    }
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={() => {
        console.log("hello");
      }}
      style={passedStyle || style}
    >
      {children}
    </button>
  );
}

export default Button;
