import process from 'process';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import store from '../../redux/store';
import notificationSlice from '../../redux/notificationSlice';

const API_BASE_URL_SOCKET = process.env.REACT_APP_API_BASE_URL_SOCKET;

var stompClient: any = null;
const getUserFromLocalStorage = (): any => {
    return localStorage.getItem('user') || '{}';
};

const ConnectServerSocket = () => {
    const socket = new SockJS(`${API_BASE_URL_SOCKET}stomp-endpoint`);
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame: any) {
        console.log('Connected: ' + frame);
        stompClient.subscribe(`/topic/notification/${JSON.parse(getUserFromLocalStorage()).id}`, function (greeting: any) {
            if (JSON.parse(greeting.body)) {
                const dispatch = store.dispatch;
                dispatch(notificationSlice.actions.subscribeOnNotification());
                setTimeout(function () {
                    dispatch(notificationSlice.actions.subscribeOffNotification());
                }, 5000);
            } else {
                const dispatch = store.dispatch;
                dispatch(notificationSlice.actions.subscribeOffNotification());
            }
            console.log('Check server socket', JSON.parse(greeting.body));
        });
    });
}

const DisConnectServerSocket = () => {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    console.log('Disconnected');
}

const SendDataToServerSocket = (data: string | undefined) => {
    if (stompClient) {
        stompClient.send('/app/hello', {}, JSON.stringify({ name: data }));
        console.log('Sent message:', data);
    } else {
        console.log('No STOMP connection available');
    }
}

export { ConnectServerSocket, DisConnectServerSocket, SendDataToServerSocket }