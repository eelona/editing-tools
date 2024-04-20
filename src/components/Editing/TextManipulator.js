import React, { createContext, useState } from "react";

const TextManipulatorContext = createContext();

export const TextManipulatorProvider = ({ children }) => {
  const [text, setText] = useState("");

  const lowerCase = () => {
    setText(text.toLowerCase());
  };

  const upperCase = () => {
    setText(text.toUpperCase());
  };

  const Capitalize = () => {
    setText(text.replace(/\b\w/g, (char) => char.toUpperCase()));
  };

  const reverseWords = () => {
    setText(text.split(" ").reverse().join(" "));
  };

  const reverseChars = () => {
    setText(text.split("").reverse().join(""));
  };

  const clearText = () => {
    setText("");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  const censorize = (bannedWords) => {
    let censoredText = text;
    for (const word of bannedWords) {
      const censorRegex = new RegExp(word, "gi");
      const hiddenWords = "*".repeat(word.length - 1);
      censoredText = censoredText.replace(censorRegex, word[0] + hiddenWords);
    }
    setText(censoredText);
  };

  const replaceText = (search, replacement) => {
    setText(text.replace(new RegExp(search, "gi"), replacement))
  };

  const [replaceWord, setReplaceWord] = useState("")
  const [newWord, setNewWord] = useState("")

  return (
    <TextManipulatorContext.Provider
      value={{
        text,
        setText,
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
      }}
    >
      {children}
    </TextManipulatorContext.Provider>
  );
};

export default TextManipulatorContext;
