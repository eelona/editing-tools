import { React, useState } from "react";
import { TextManipulatorProvider } from "./components/Editing/TextManipulator";
import { TextArea, Buttons } from "./components/Editing/TextView";
import RealTimeData from "./components/Editing/RealTimeData";

const App = () => {
  return (
    <TextManipulatorProvider>
      <TextArea />
      <Buttons />
      <RealTimeData />
    </TextManipulatorProvider>
  );
};

export default App;
