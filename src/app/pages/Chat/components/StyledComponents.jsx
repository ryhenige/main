import styled from "styled-components"

// room page
export const ChatBox = styled.div`
  margin: 20px auto;
  margin-bottom: 0;
  border: 2px solid #ccc;
  border-radius: 10px;
  height: 55vh;
  max-width: 400px;
  overflow-y: auto;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`

export const ChatMessage = styled.div`
  padding: 10px;
  border-radius: 5px;
  width: max-content;
  max-width: 80%;
  text-align: left;
  background-color: ${props => (props.user ? "#89CFF0" : "lightgray")};
  align-self: ${props => (props.user ? "flex-end" : "flex-start")};
  word-wrap: break-word;
`

export const MessageInputContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
`

export const StyledTextarea = styled.textarea`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #89CFF0;
  resize: none;
  font-size: 16px;
  background-color: #fff;
  color: black;
  min-height: 50px;

  &:focus {
    outline: none;
    border-color: #6495ED;
  }
`

export const SendButton = styled.button`
  background-color: #89CFF0;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 200ms ease;

  &:hover {
    background-color: #6495ED;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`

export const Timestamp = styled.div`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`

// Join page
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  max-width: 400px;
  margin: 20px auto;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

export const FormTitle = styled.h2`
  color: #333;
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  margin-top: 5px;
`

export const FormLabel = styled.label`
  font-size: 16px;
  color: #333;
  font-weight: bold;
  align-self: flex-start;
`

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #89CFF0;
  font-size: 16px;
  outline: none;
  background-color: #fff;
  transition: border-color 200ms ease;

  &:focus {
    border-color: #6495ED;
  }
`

export const FormSelect = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #89CFF0;
  font-size: 16px;
  background-color: #fff;
  transition: border-color 200ms ease;

  &:focus {
    border-color: #6495ED;
  }
`

export const JoinButton = styled.button`
  background-color: #89CFF0;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 200ms ease;
  width: 100%;

  &:hover {
    background-color: #6495ED;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`