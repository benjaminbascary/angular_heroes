import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Styling
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Developer's
import { AppComponent } from './app.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { AppRouterModule } from './AppRouter.module';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
