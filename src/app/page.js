"use client"
import ClientProvider from "./ClientProvider";

import { useRouter } from "next/navigation";
import { useState } from "react";
import dynamic from "next/dynamic";

const VideoCall = dynamic(() => import("./Component/VideoCall"), { ssr: false });

export default function Home() {
  const router = useRouter();
  const [roomName, setRoomName] = useState("");

  const joinRoom = () => {
    router.push(`/room/${roomName || Math.random().toString(36).slice(2)}`);
  };
  return (
    <>
      <ClientProvider>
        <VideoCall />
      </ClientProvider>
      {/* <div>
        <Head>
          <title>Native WebRTC API with NextJS</title>
          <meta
            name="description"
            content="Use Native WebRTC API for video conferencing"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>Lets join a room!</h1>
          <input
            onChange={(e) => setRoomName(e.target.value)}
            value={roomName}
          />
          <button onClick={joinRoom} type="button">
            Join Room
          </button>
        </main>
      </div> */}
    </>
  );
}
