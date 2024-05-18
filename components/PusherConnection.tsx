"use client";

import { useEffect } from "react";
import Pusher from "pusher-js";
import { QueueData } from "@/model/QueueData";

interface PusherConnectionProps {
    onQueueUpdate: (data: QueueData[]) => void;
}

const PusherConnection: React.FC<PusherConnectionProps> = ({ onQueueUpdate }) => {
    useEffect(() => {
        const pusher = new Pusher('12345', {
            cluster: 'mt1',
        });

        const channel = pusher.subscribe('antrian-channel');

        channel.bind('antrian-update', (data: QueueData[]) => {
            onQueueUpdate(data);
        });

        return () => {
            channel.unbind();
            pusher.unsubscribe('antrian-channel');
        };
    }, [onQueueUpdate]);

    return null;
}

export default PusherConnection;