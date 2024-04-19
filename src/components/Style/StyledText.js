import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  width: 80%;
  height: 650px;
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
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ff6b6b;
  }
`;

export const StyledInput = styled.input`
  padding: 5px;
  background-color: whitesmoke;
`;

export default { StyledTextArea, StyledButton, StyledInput };
