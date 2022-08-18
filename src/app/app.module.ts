import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ApiServiceService } from './api-service.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule,
    AppRoutingModule,MatTableModule,
    BrowserAnimationsModule,MatSlideToggleModule,

  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }