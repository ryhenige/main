import React, { useState, useEffect, useRef } from "react"
import { useDocumentTitle } from "../../../hooks/useDocumentTitle"
import {
  ChatBox, ChatMessage, MessageInputContainer, StyledTextarea, SendButton, Timestamp,
  FormContainer, FormTitle, FormLabel, FormInput, FormSelect, JoinButton
} from "./components/StyledComponents"
import { useWebSocketChannel } from "../../../hooks/useWebSocketChannel"

export default function Chat() {
  useDocumentTitle("Chat")

  const [message, setMessage] = useState("")
  const [channel, setChannel] = useState("")
  const [username, setUsername] = useState("")
  const [joined, setJoined] = useState(false)

  const chatBoxRef = useRef(null)

  const { messages, sendMessage, joinRoom, clientId, assignedUsername, room, readyState } = useWebSocketChannel()

  useEffect(() => {
    if (chatBoxRef.current) {
      const chatBox = chatBoxRef.current
      const isScrolledToBottom = chatBox.scrollHeight - chatBox.clientHeight - chatBox.scrollTop < 100

      if (isScrolledToBottom) {
        chatBox.scrollTop = chatBox.scrollHeight
      }
    }
  }, [messages])

  const handleJoin = (e) => {
    e.preventDefault()
    if (username.trim() && channel.trim()) {
      joinRoom(username, channel)
      setJoined(true)
    }
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (message.trim()) {
      sendMessage(message)
      setMessage("")
    }
  }

  return (
    <>
      {!joined ? (
        <FormContainer onSubmit={handleJoin}>
          <FormTitle>Join a Chat Room</FormTitle>

          <FormLabel>Username:</FormLabel>
          <FormInput
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <FormLabel>Choose a Room:</FormLabel>
          <FormSelect
            onChange={(e) => setChannel(e.target.value)}
            value={channel}
            required
          >
            <option value="">-- Select Room --</option>
            <option value="one">One</option>
          </FormSelect>

          <JoinButton type="submit" disabled={!username || !channel}>
            Join Chat
          </JoinButton>
        </FormContainer>
      ) : room ? (
        <>
          <FormTitle>Chat Room: {room}</FormTitle>
          <span><strong>Your Username:</strong> {assignedUsername || username}</span>
          <br />
          <form onSubmit={handleSendMessage}>
            <MessageInputContainer>
              <StyledTextarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage(e)
                  }
                }}
                placeholder="Type a message..."
                rows={2}
              />
              <SendButton type="submit" disabled={!message.trim() || readyState !== 1}>
                Send
              </SendButton>
            </MessageInputContainer>
          </form>

          <ChatBox ref={chatBoxRef}>
            {messages.map((msg, index) => (
              <ChatMessage key={index} user={msg.senderId === clientId}>
                <strong>{msg.senderName}:</strong> {msg.message}
                <Timestamp>
                  <em>Sent at: {new Date(msg.sentAt).toLocaleTimeString()}</em>
                </Timestamp>
              </ChatMessage>
            ))}
          </ChatBox>
        </>
      ) : (
        <p>Loading room data...</p>
      )}
    </>
  )
}