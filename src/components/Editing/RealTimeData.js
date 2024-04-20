import React, { useContext, useEffect, useState } from "react";
import TextManipulatorContext from "./TextManipulator";
import { StyledRealTimeData, StyledDataItem } from "../Style/StyledText";

const RealTimeData = () => {
  const { text } = useContext(TextManipulatorContext);
  const [statistics, setStatistics] = useState({
    words: 0,
    characters: 0,
    numbers: 0,
    letters: 0,
    sentences: 0,
    specialCharacters: 0,
    mostFrequentWord: "",
  });

  useEffect(() => {
    const calculateStatistics = () => {
      const wordRegex = /[^\s]+/g;
      const characterRegex = /./g;
      const numberRegex = /\d/g;
      const letterRegex = /[a-zA-Z]/g;
      const sentenceRegex = /[^.!?]+[.!?]+/g;
      const specialCharacterRegex = /[^\w\s]/g;

      const words = text.match(wordRegex) || [];
      const characters = text.match(characterRegex) || [];
      const numbers = text.match(numberRegex) || [];
      const letters = text.match(letterRegex) || [];
      const sentences =
        (text.match(sentenceRegex) || []).length + (text.trim() !== "" ? 1 : 0);
      const specialCharacters = text.match(specialCharacterRegex) || [];

      const wordCount = {};
      words.forEach((word) => {
        wordCount[word] = (wordCount[word] || 0) + 1;
      });

      let mostFrequentWord = "";
      let maxCount = 0;
      Object.keys(wordCount).forEach((word) => {
        if (wordCount[word] > maxCount) {
          mostFrequentWord = word;
          maxCount = wordCount[word];
        }
      });

      setStatistics({
        words: words.length,
        characters: characters.length,
        numbers: numbers.length,
        letters: letters.length,
        sentences: sentences,
        specialCharacters: specialCharacters.length,
        mostFrequentWord: mostFrequentWord,
      });
    };

    calculateStatistics();

    const intervalId = setInterval(calculateStatistics, 3000);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <StyledRealTimeData>
      <StyledDataItem>Words: {statistics.words}</StyledDataItem>
      <StyledDataItem>Characters: {statistics.characters}</StyledDataItem>
      <StyledDataItem>Numbers: {statistics.numbers}</StyledDataItem>
      <StyledDataItem>Letters: {statistics.letters}</StyledDataItem>
      <StyledDataItem>Sentences: {statistics.sentences}</StyledDataItem>
      <StyledDataItem>
        Special Characters: {statistics.specialCharacters}
      </StyledDataItem>
      <StyledDataItem>
        Most Frequent Word: {statistics.mostFrequentWord}
      </StyledDataItem>
    </StyledRealTimeData>
  );
};

export default RealTimeData;
