"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AgoraRTCProvider = dynamic(
  () => import("agora-rtc-react").then((mod) => mod.AgoraRTCProvider),
  { ssr: false } // Prevents it from running on the server
);

const ClientProvider = ({ children }) => {
  const [agoraClient, setAgoraClient] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("agora-rtc-react").then((mod) => {
        const AgoraRTC = mod.default;
        const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
        setAgoraClient(client);
      });
    }
  }, []);

  if (!agoraClient) return null; // Prevent rendering before AgoraRTC loads

  return <AgoraRTCProvider client={agoraClient}>{children}</AgoraRTCProvider>;
};

export default ClientProvider;
