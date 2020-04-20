/***********************************************************************************
//  +==============================================================================+
//  | Licensed Materials - Property of IBM                                         |
//  | (C) Copyright IBM Corp. 2018,2020                                            |
//  | US Government Users Restricted Rights- Use, duplication or disclosure        |
//  | restricted by GSA ADP Schedule Contract with IBM Corp.                       |
//  +==============================================================================+
***********************************************************************************/

import { IWebSocketRequest } from './web-socket-request.interface';



export interface IWebSocketService {
    sendRequest(req: IWebSocketRequest): void;
}


