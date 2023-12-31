
import * as SockJS from 'sockjs-client';
import { Stomp } from "@stomp/stompjs";

export class WebSocketConnector {

    private stompClient: any;

    constructor(private webSocketEndPoint: string, private topic: string, private onMessage: Function, private callbackError?: Function) {
        const errorCallback = callbackError || this.onError;
        this.connect(errorCallback);
    }

    private connect(errorCallback: Function) {
        console.log("Starting a WebSocket connection");
        const ws = new SockJS(this.webSocketEndPoint);
        this.stompClient = Stomp.over(ws);
        this.stompClient.connect({}, (frame : any) => {
            this.stompClient.subscribe(this.topic, (event: any) => {
                this.onMessage(event);
            });
        }, errorCallback.bind(this));
    };

    private onError(error: any) {
        console.log("Error while connect: " + error);
        setTimeout(() => {
            console.log("Trying to connect again...");
            this.connect(this.onError);
        }, 3000);
    }
}