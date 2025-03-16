"use client";
import React from "react";
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";
function ClientProvider({ children }) {
  return (
    <AgoraRTCProvider
      client={AgoraRTC.createClient({ mode: "rtc", codec: "vp8" })}
    >
      {children}
    </AgoraRTCProvider>
  );
}

export default ClientProvider;
