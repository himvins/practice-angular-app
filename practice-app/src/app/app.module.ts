import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebSocketCommunicateService } from './Services/web-socket-communicator.service';
import { Tokens } from './Services/constants';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: 'WebSocketCommunicateService', useClass: WebSocketCommunicateService },
  { provide: Tokens.WEBSOCKET_INTERFACE, useExisting: 'WebSocketCommunicateService' },],
  bootstrap: [AppComponent]
})
export class AppModule { }
