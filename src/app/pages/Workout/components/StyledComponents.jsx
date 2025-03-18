import styled from "styled-components"

// room page
export const WeekSpinner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min-content;
  margin: 0 auto;
  position: relative;
`

export const WeekDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 32px;
  color: #6495ED;
  width: 120px;
`

export const Arrows = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  transition: background-color 200ms ease;

  &:hover, &:focus {
    background-color: lightgray;
  }
`