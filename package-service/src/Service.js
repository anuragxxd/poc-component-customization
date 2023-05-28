import React from "react";
import { Button } from "package-ui";

function Service() {
  return (
    <>
      <Button>
        <div>Without Id</div>
      </Button>
      <br />
      <br />
      <Button id="primary">
        <div>With Id Primary</div>
      </Button>
    </>
  );
}

export default Service;
