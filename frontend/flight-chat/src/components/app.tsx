import React from "react";
import NextButton from "./nextButton.tsx";
import Input from "./input.tsx";

const App = () => {
  return (
    <div className="container">
      <Input id="Source" type="text" placeholder="Enter Source" />
      <Input id="Destination" type="text" placeholder="Enter Destination" />
      <NextButton />
    </div>
  );
};

export default App;
