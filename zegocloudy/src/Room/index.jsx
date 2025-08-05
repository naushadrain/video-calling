import React, { PureComponent } from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import './RoomPage.css';
function RoomPage() {
    const { roomId } = useParams();
    const myMeeting = async (element) => {
        //const appID = 1679227403;
        const appID = 1649933003;
        //const serverSecret = "0e6d42053805e326752e86fcfaf2bb12";
        const serverSecret = "750238dd3e5fbcb411350d3a9f9ceb29"
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Dr. Kumud");
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
            showScreenSharingButton: true,
        })
    }
    return (
        <div className="roompage-container">
            <div ref={myMeeting} className="meeting-wrapper" />
        </div>
    );
}

export default RoomPage;
