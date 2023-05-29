import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';

const SubscriptionBox = () => {
    const [messages, setMessages] = useState<any>([]);
    const [connected, setConnected] = useState<boolean>(false);

    useEffect(() => {
        const socket = new SockJS('http://localhost:9090/stomp-endpoint'); // Thay đổi URL endpoint tùy thuộc vào máy chủ của bạn
        const stompClient = Stomp.over(socket);

        stompClient.connect({}, (frame: any) => {
            setConnected(true);
            console.log('Connected: ' + frame);
            stompClient.subscribe('/topic/greetings', (greeting) => {
                showGreeting(JSON.parse(greeting.body));
            });
        });

        return () => {
            if (stompClient) {
                stompClient.disconnect();
                setConnected(false);
            }
        };
    }, []);

    const showGreeting = (greeting: any) => {
        setMessages((prevMessages: any) => [...prevMessages, greeting]);
    };

    // const onMessageReceived = (message: any) => {
    //     const newMessage = JSON.parse(message.body);
    //     setMessages([...messages, newMessage]);
    // };

    return (
        <div>
            <h2>Subscription Box</h2>
            {connected ? <p>Connected to STOMP server</p> : <p>Disconnected from STOMP server</p>}
            {messages.map((message: any, index: number) => (
                <p key={index}>{message}</p>
            ))}
        </div>
    );
};

export default SubscriptionBox;
