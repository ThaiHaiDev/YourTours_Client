import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SockJS from 'sockjs-client';

import { Stomp } from '@stomp/stompjs';

import NotificationIcon from '../../components/IconAnimationMaster/NotificationIcon/NotificationIcon';
import PhoneIcon from '../../components/IconAnimationMaster/PhoneIcon/PhoneIcon';
import SpinAroundIcon from '../../components/IconAnimationMaster/SpinAroundIcon/SpinAroundIcon';
import { RootState } from '../../redux/store';
import './Test.scss';

const Test = () => {
    const authMessData = useSelector((state: RootState) => state.notification);
    const [connected, setConnected] = useState<any>(false);
    const [greetings, setGreetings] = useState<any>([]);
    const [name, setName] = useState<any>('');

    var stompClient: any = null;

    const setConnectedStatus = (connected: any) => {
        setConnected(connected);
    };

    const showGreeting = (message: any) => {
        setGreetings((prevGreetings: any) => [...prevGreetings, message]);
    };

    const connect = () => {
        const socket = new SockJS('https://yourtour.herokuapp.com/stomp-endpoint');

        stompClient = Stomp.over(socket);
        // const connectHeaders = {
        //     authorization: 'Bearer your-token',
        //     // Add more headers as needed
        // };

        // stompClient.connect(connectHeaders, function (frame: any) {
        //     setConnected(true);
        //     console.log('Connected: ' + frame);
        //     stompClient.subscribe('/topic/greetings', function (greeting: any) {
        //         showGreeting(JSON.parse(greeting.body));
        //     });
        // });

        stompClient.connect({}, function (frame: any) {
            setConnectedStatus(true);
            console.log('Connected: ' + frame);
            // stompClient.subscribe('/topic/greetings', function (greeting: any) {
            //     showGreeting(JSON.parse(greeting.body));
            // });
            // stompClient.send('/app/hello', {}, JSON.stringify({ name: name }));
            stompClient.subscribe('/topic/notification/6f7098fe-ad04-47a4-8e3c-ff4722328d0b', function (greeting: any) {
                showGreeting(JSON.parse(greeting.body));
                console.log('check', greeting.body);
            });
        });
    };

    const disconnect = () => {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        setConnectedStatus(false);
        console.log('Disconnected');
    };

    const sendName = () => {
        console.log(stompClient);
        if (stompClient) {
            stompClient.send('/app/hello', {}, JSON.stringify({ name: name }));
            console.log('Sent message:', name);
        } else {
            console.log('No STOMP connection available');
        }
    };

    return (
        <div>
            <form>
                <button type="button" disabled={connected} onClick={connect}>
                    Connect
                </button>
                <button type="button" disabled={!connected} onClick={disconnect}>
                    Disconnect
                </button>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <button type="button" onClick={sendName}>
                        Send
                    </button>
                </div>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Greeting</th>
                    </tr>
                </thead>
                <tbody>
                    {greetings.map((greeting: any, index: number) => (
                        <tr key={index}>
                            <td>{greeting.message}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {authMessData.notiKey ? <NotificationIcon /> : <></>}

            <hr />
            <SpinAroundIcon />
            <hr />
            <PhoneIcon />
        </div>
    );
};

export default Test;
