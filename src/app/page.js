import Image from "next/image";
import ClientProvider from "./ClientProvider";
import VideoCall from "./Component/VideoCall";

export default function Home() {
  return (
    <ClientProvider>
      <VideoCall />
    </ClientProvider>
  );
}
