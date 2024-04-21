import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  width: 80%;
  height: 600px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 8px;
  resize: vertical;
  outline: none;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  background-color: #f3cfc6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #007bff;
    background-color: lightpink;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  background-color: pink;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 15px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff6b6b;
  }
`;

export const ReplaceButton = styled.button`
  padding: 10px 24px;
  width: 100px;
  height: 10%;
  font-size: 13px;
  font-weight: bold;
  background-color: pink;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 15px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff6b6b;
  }
`;

export const StyledInput = styled.input`
  padding: 5px;
  background-color: whitesmoke;
`;

export const StyledRealTimeData = styled.div`
  background-color: pink;
  height: 550px;
  width: 200px;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 20px;
  right: 20px;
  gap: 30px;
  &:hover {
    background-color: #ff6b6b;
  }
`;

export const StyledDataItem = styled.p`
  margin-bottom: 5px;
`;


export default {
  StyledTextArea,
  StyledButton,
  StyledInput,
  StyledRealTimeData,
  StyledDataItem,
  ReplaceButton,
};
