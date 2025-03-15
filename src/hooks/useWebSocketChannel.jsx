import { useState, useEffect } from "react";
import useWebSocket from "react-use-websocket";

const SERVER_URL = window.location.hostname.includes("localhost")
  ? "ws://localhost:3000"
  : "wss://main-server-patient-fog-562.fly.dev";

export function useWebSocketChannel() {
  const [messages, setMessages] = useState([]);
  const [clientId, setClientId] = useState(null);
  const [assignedUsername, setAssignedUsername] = useState(null);
  const [room, setRoom] = useState(null);
  const [connected, setConnected] = useState(true);

  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(SERVER_URL, {
    shouldReconnect: () => true,
  });

  useEffect(() => {
    if (lastJsonMessage !== null) {
      if (lastJsonMessage.type === "assign_id") {
        setClientId(lastJsonMessage.clientId);
      } else if (lastJsonMessage.type === "room_joined") {
        setAssignedUsername(lastJsonMessage.username);
        setRoom(lastJsonMessage.channel);
      } else if (lastJsonMessage.type === "message") {
        setMessages((prev) => [...prev, lastJsonMessage]);
      }
    }
  }, [lastJsonMessage]);

  useEffect(() => {
    if (readyState === 1 && assignedUsername && room) {
      console.log(`🔄 Rejoining room: ${room} as ${assignedUsername}`);
      sendJsonMessage({ action: "join_room", username: assignedUsername, channel: room });
    } else if (readyState === 3) {
      setConnected(false);
    }
  }, [readyState]);

  const sendMessage = (message) => {
    if (room && connected) {
      const sentAt = new Date().toISOString();
      sendJsonMessage({ action: "send_message", message, room, sentAt });
    }
  };

  const joinRoom = (username, channel) => {
    if (!username || !channel) return;
    setAssignedUsername(username);
    setRoom(channel);
    sendJsonMessage({ action: "join_room", username, channel });
  };

  return { messages, sendMessage, joinRoom, clientId, assignedUsername, room, readyState, connected };
}
