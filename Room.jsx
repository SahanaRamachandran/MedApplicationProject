import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";
import { useParams } from "react-router-dom";
import { v4 } from "uuid";

function Room() {
  const { roomId } = useParams();
  async function meetingUI(element) {
    const appId = 105519950;

    const serverSecret = "4a3745652512b551aa9e476b55e034c5";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      v4(),
      "Sahana"
    );

    const ui = ZegoUIKitPrebuilt.create(kitToken);

    ui.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  }

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Room {roomId}</h2>
      <div ref={meetingUI}></div>
    </>
  );
}

export default Room;
