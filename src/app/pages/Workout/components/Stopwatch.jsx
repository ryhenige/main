// stopwatch
import { useState, useEffect } from 'react'

import { FaTimes, FaRegClock, FaPlay, FaPause  } from 'react-icons/fa'
import styled from 'styled-components'

import { RelativeContainer, AbsoluteContainer, Text } from './StyledComponents'

const OpenModalButton = styled.div`
  position: absolute;
  left: -50px;
  top: 55%;
  transform: translateY(-50%);
  cursor: pointer;
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const ModalBody = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  z-index: 2;
  position: relative;
`

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

const Timer = styled.div`
  font-size: 64px;
  font-weight: bold;
  margin-bottom: 10px;
  border-radius: 50%;
  border: 4px solid #89CFF0;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export default function Stopwatch() {
  const [open, setOpen] = useState(false)
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  const handleStart = () => {
    setIsRunning(true)
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setTime(0)
  }

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isRunning])

  const handleClose = () => {
    setOpen(false)
    handleReset()
  }

  const formattedTime = () => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return minutes > 0 
      ? `${minutes}:${seconds.toString().padStart(2, '0')}` 
      : `${seconds}` 
  }

  return (
    <>
      <OpenModalButton onClick={() => setOpen(true)}>
        <FaRegClock size={30} />
      </OpenModalButton>
      {open && (
        <Modal>
          <ModalBody>
            <CloseButton onClick={handleClose}>
              <FaTimes size={30} />
            </CloseButton>

            <Timer
              onClick={isRunning ? handleStop : handleStart}
              running={isRunning}
            >
              <RelativeContainer>
                  <Text fontSize={36}>{formattedTime()}</Text> 
                  <AbsoluteContainer>
                    {isRunning ? (
                      <FaPause size={20} />
                    ) : (
                      <FaPlay size={20} />
                    )}
                  </AbsoluteContainer>
              </RelativeContainer>
            </Timer>
            
          </ModalBody>
        </Modal>
      )}
    </>
  )
}
