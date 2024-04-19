import { React, useState } from "react";
import { TextManipulatorProvider } from "./components/Editing/TextManipulator";
import { TextArea, Buttons } from "./components/Editing/TextView";

const App = () => {
  return (
    <TextManipulatorProvider>
      <TextArea />
      <Buttons />
    </TextManipulatorProvider>
  );
};

export default App;
