/***********************************************************************************
//  +==============================================================================+
//  | Licensed Materials - Property of IBM                                         |
//  | (C) Copyright IBM Corp. 2018,2020                                            |
//  | US Government Users Restricted Rights- Use, duplication or disclosure        |
//  | restricted by GSA ADP Schedule Contract with IBM Corp.                       |
//  +==============================================================================+
***********************************************************************************/

import { InjectionToken } from '@angular/core';
import { IWebSocketService } from './web-socket-communicator-service.interface';


export class Tokens {
  public static readonly WEBSOCKET_INTERFACE: InjectionToken<IWebSocketService> =
    new InjectionToken<IWebSocketService>('web.socket.service');
}

