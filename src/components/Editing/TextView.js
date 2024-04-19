import React, { useContext } from "react";
import TextManipulatorContext from "./TextManipulator";
import { StyledTextArea, StyledButton, StyledInput } from "../Style/StyledText";

const TextArea = () => {
  const { text, setText } = useContext(TextManipulatorContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return <StyledTextArea value={text} onChange={handleChange} />;
};

const Buttons = () => {
    const {
      lowerCase,
      upperCase,
      Capitalize,
      reverseWords,
      reverseChars,
      clearText,
      copyText,
      censorize,
      replaceText,
      replaceWord, 
      setReplaceWord,
      newWord, 
      setNewWord,
    } = useContext(TextManipulatorContext);
  
    const handleReplaceChange = (e) => { 
      setReplaceWord(e.target.value);
    };
  
    const handleNewChange = (e) => { 
      setNewWord(e.target.value);
    };
  
    const handleReplaceClick = () => {
      replaceText(replaceWord, newWord);
    };
  
    return (
      <div>
        <StyledButton onClick={upperCase}>UpperCase</StyledButton>
        <StyledButton onClick={lowerCase}>LowerCase</StyledButton>
        <StyledButton onClick={Capitalize}>Capitalize</StyledButton>
        <StyledButton onClick={reverseWords}>Reverse Words</StyledButton>
        <StyledButton onClick={reverseChars}>Reverse Chars</StyledButton>
        <StyledButton onClick={clearText}>Clear Text</StyledButton>
        <StyledButton onClick={copyText}>Copy Text</StyledButton>
        <StyledButton
          onClick={() => censorize(["elona", "nea", "jimin", "hello"])}
        >
          Censorize
        </StyledButton>
        <div>
          <StyledInput
            type="text"
            value={replaceWord}
            onChange={handleReplaceChange}
            placeholder="word"
          />
          <StyledInput
            type="text"
            value={newWord}
            onChange={handleNewChange}
            placeholder="replace with"
          />
          <StyledButton onClick={handleReplaceClick}>Replace Text</StyledButton>
        </div>
      </div>
    );
};
export { TextArea, Buttons };
