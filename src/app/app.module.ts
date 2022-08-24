import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { DialogCreateCareerComponent } from './pages/career/dialog-create-career/dialog-create-career.component';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [DialogCreateCareerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
