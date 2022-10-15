import React, { useEffect, useState } from "react";

// CSS
import styles from "../Styles/Styles.module.css";
// CSS

// Socket
import { io } from "socket.io-client";
// Socket

const Task2 = () => {
  const socketUrl = "wss://ws.bitpin.ir";
  const socket = io(socketUrl);
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });
    socket.on("disconnect", () => {
      setIsConnected(false);
    });
    socket.on("pong", () => {
      setLastPong(new Date().toISOString());
    });
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  });

  const sendPing = () => {
    socket.emit("ping");
  };
  return (
    <div
      className={`w-screen h-max flex items-center justify-center ${styles.task2Container}`}
    >
      <div>
        <p>Connected: {"" + isConnected}</p>
        <p>Last pong: {lastPong || "-"}</p>
        <button onClick={sendPing}>Send ping</button>
      </div>
    </div>
  );
};

export default Task2;
