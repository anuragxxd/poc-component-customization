import React from "react";
import { Service } from "package-service";
import { Wrapper } from "package-ui";

const App = () => {
  return (
    <Wrapper
      passedStyle={{
        button: {
          default: {
            color: "white",
            backgroundColor: "black",
          },
          primary: {
            color: "black",
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid black",
          },
        },
      }}
    >
      <div>
        <Service></Service>
      </div>
    </Wrapper>
  );
};

export default App;
