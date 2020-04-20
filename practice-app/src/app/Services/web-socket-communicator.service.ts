/***********************************************************************************
//  +==============================================================================+
//  | Licensed Materials - Property of IBM                                         |
//  | (C) Copyright IBM Corp. 2018,2020                                            |
//  | US Government Users Restricted Rights- Use, duplication or disclosure        |
//  | restricted by GSA ADP Schedule Contract with IBM Corp.                       |
//  +==============================================================================+
***********************************************************************************/

import { OnDestroy } from '@angular/core';
import {
    WebSocketSubject,
    webSocket
} from 'rxjs/webSocket';

import { IWebSocketService } from './web-socket-communicator-service.interface';
import { IWebSocketRequest } from './web-socket-request.interface';

// To get websocket server Url from global variable.
declare var webSocketUrl: any;
export class WebSocketCommunicateService implements IWebSocketService, OnDestroy {

    private webSocket$: WebSocketSubject<string>;
    constructor() {
        this.webSocket$ = webSocket({
            url: webSocketUrl.href,
            serializer: (msg: string) => msg,
        });
        // atleast one subscriber require to send the message to socket server.
        this.webSocket$.subscribe();
    }

    public  sendRequest(req: IWebSocketRequest): void {
        const query = this.getQueryString(req).concat('&WebSocketRequestID=').concat(this.getUniqueRequestID().toString());
        this.webSocket$.next(query);
    }

    public ngOnDestroy(): void {
        this.webSocket$.unsubscribe();
    }

    private getUniqueRequestID(): number {
        return Math.floor(Math.random() * 100000);
    }

    private getQueryString(obj: IWebSocketRequest): string {
        const requestFormat = [];
        for (const prefix of Object.keys(obj)) {
            // encode it to be sent as URI
            requestFormat[requestFormat.length] = encodeURIComponent(prefix) + '=' + encodeURIComponent(obj[prefix]);
        }
        // Return the resulting serialization
        return requestFormat.join('&');
    }
}
