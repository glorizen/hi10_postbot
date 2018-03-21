import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import { FileDropModule } from 'ngx-file-drop';

import { AppComponent } from './app.component';
import { PostbotComponent } from './postbot/postbot.component';


@NgModule({
  declarations: [
    AppComponent,
    PostbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
