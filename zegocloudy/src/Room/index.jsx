import React, { PureComponent } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
function RoomPage() {
    const { roomId } = useParams();
    const myMeeting = async (element) => {
        const appID = 1679227403;
        const serverSecret = "0e6d42053805e326752e86fcfaf2bb12";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Naushad Rain");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `https://video-calling-hqju.onrender.com/room/${roomId}`,
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,

            },
            showScreenSharingButton: false,
        })
    }
    return (
        <div>
            <div ref={myMeeting} />
        </div>
    );
}

export default RoomPage;