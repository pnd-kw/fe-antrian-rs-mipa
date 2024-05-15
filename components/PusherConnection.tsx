"use client";

import { useEffect } from "react";
import Pusher from "pusher-js";

const PusherConnection: React.FC = () => {
    useEffect(() => {
        const pusher = new Pusher('12345', {
            cluster: 'mt1',
        });

        const channel = pusher.subscribe('antrian-channel');

        channel.bind('antrian-event', (data: any) => {
            console.log('Received data:', data);
        });

        return () => {
            channel.unbind();
            pusher.unsubscribe('antrian-channel');
        };
    }, []);

    return null;
}

export default PusherConnection;