"use client";

import React, { useEffect, useState } from "react";
import AgoraRTC, {
  LocalUser,
  RemoteUser,
  useJoin,
  useLocalMicrophoneTrack,
  useLocalCameraTrack,
  usePublish,
  useRemoteUsers,
} from "agora-rtc-react";

export default function VideoCall() {
  if (typeof window === "undefined") {
    return null; // Prevents rendering on the server
  }
  const [appId, setAppId] = useState("4e4f366a04334ff19d2205abd577b0bb");
  const [channel, setChannel] = useState("test");
  const [token, setToken] = useState(null);
  const [isCalling, setIsCalling] = useState(false);
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);

  useJoin({ appid: appId, channel: channel, token: token || null }, isCalling);
  const [localMicrophoneTrack, setLocalMicrophoneTrack] = useState(null);
  const [localCameraTrack, setLocalCameraTrack] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && (micOn || cameraOn)) {
      async function initTracks() {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true,
          });

          const micTrack = await AgoraRTC.createMicrophoneAudioTrack();
          const camTrack = await AgoraRTC.createCameraVideoTrack();

          setLocalMicrophoneTrack(micTrack);
          setLocalCameraTrack(camTrack);
        } catch (error) {
          console.error("Error accessing camera/microphone:", error);
        }
      }
      initTracks();
    }

    // if (micOn || cameraOn) {
    // }
  }, [micOn, cameraOn]);

  usePublish([localMicrophoneTrack, localCameraTrack]);
  const remoteUsers = useRemoteUsers();
  if (remoteUsers.length > 0) {
    console.log(remoteUsers, "remoteUsers");
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white p-6">
      {isCalling ? (
        <div className="w-full max-w-4xl flex flex-col items-center gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="w-64 h-64 bg-gray-700 flex items-center justify-center rounded-lg">
              <LocalUser
                audioTrack={localMicrophoneTrack}
                videoTrack={localCameraTrack}
                cameraOn={cameraOn}
                micOn={micOn}
              >
                <span className="text-center">You</span>
              </LocalUser>
            </div>
            {remoteUsers.length > 0 ? (
              remoteUsers.map((user) => (
                <div
                  key={user.uid}
                  className="w-64 h-64 bg-gray-700 flex items-center justify-center rounded-lg"
                >
                  <RemoteUser user={user} />
                  <span className="text-center">{user.uid}</span>
                </div>
              ))
            ) : (
              <div className="w-64 h-64 bg-gray-700 flex items-center justify-center rounded-lg">
                Waiting for user...
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setMicOn(!micOn)}
              className={`px-6 py-2 rounded-lg ${
                micOn ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {micOn ? "Mute Mic" : "Unmute Mic"}
            </button>
            <button
              onClick={() => setCameraOn(!cameraOn)}
              className={`px-6 py-2 rounded-lg ${
                cameraOn ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {cameraOn ? "Turn Off Camera" : "Turn On Camera"}
            </button>
            <button
              onClick={() => setIsCalling(false)}
              className="px-6 py-2 bg-red-600 rounded-lg"
            >
              Leave Call
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-xl font-bold">Join a Video Call</h1>
          <input
            type="text"
            value={appId}
            onChange={(e) => setAppId(e.target.value)}
            placeholder="Agora App ID"
            className="p-2 bg-gray-800 border border-gray-600 rounded-lg w-64"
          />
          <input
            type="text"
            value={channel}
            onChange={(e) => setChannel(e.target.value)}
            placeholder="Channel Name"
            className="p-2 bg-gray-800 border border-gray-600 rounded-lg w-64"
          />
          <input
            type="text"
            value={token || ""}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Token (Optional)"
            className="p-2 bg-gray-800 border border-gray-600 rounded-lg w-64"
          />
          <button
            onClick={() => setIsCalling(true)}
            className="px-6 py-2 bg-blue-600 rounded-lg"
          >
            Join Call
          </button>
        </div>
      )}
    </div>
  );
}
