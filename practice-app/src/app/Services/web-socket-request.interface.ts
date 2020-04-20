/***********************************************************************************
//  +==============================================================================+
//  | Licensed Materials - Property of IBM                                         |
//  | (C) Copyright IBM Corp. 2018,2020                                            |
//  | US Government Users Restricted Rights- Use, duplication or disclosure        |
//  | restricted by GSA ADP Schedule Contract with IBM Corp.                       |
//  +==============================================================================+
***********************************************************************************/

export interface IWebSocketRequest {
    RequestClass: string;
    OperationClass: string;
    OperationVerbs: string;
    LogItem: string;
}
