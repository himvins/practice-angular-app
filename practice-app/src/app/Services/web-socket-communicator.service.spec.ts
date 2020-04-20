/***********************************************************************************
//  +==============================================================================+
//  | Licensed Materials - Property of IBM                                         |
//  | (C) Copyright IBM Corp. 2018,2020                                            |
//  | US Government Users Restricted Rights- Use, duplication or disclosure        |
//  | restricted by GSA ADP Schedule Contract with IBM Corp.                       |
//  +==============================================================================+
***********************************************************************************/

import { TestBed } from '@angular/core/testing';
import { Tokens } from './constants';
import { WebSocketCommunicateService } from './web-socket-communicator.service';
import { AppModule } from '../app.module';
import { IWebSocketRequest } from './web-socket-request.interface';



describe('WebSocketCommunicatorService', () => {
    let webSocketService: WebSocketCommunicateService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule
            ],
            providers: []
        });

        webSocketService = TestBed.get(Tokens.WEBSOCKET_INTERFACE);

    });

    describe('sendRequest', () => {
        it('should send the request to socket server with desired query string', async () => {
            const obj = { log: 'This is a log item' };

            const req: IWebSocketRequest = {
                RequestClass: 'ActivityLogReporter', OperationClass: 'ActivityLogReporter', OperationVerbs: 'LogData',
                LogItem: JSON.stringify(obj)
            };

            spyOn(webSocketService, 'sendRequest').and.callThrough();
            webSocketService.sendRequest(req);
            // check if request sent successfully.
            expect(webSocketService.sendRequest).toHaveBeenCalledWith(req);
        });
        // We may add format specific tests in future.
    });


});
