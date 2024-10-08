import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './component/input/input.component';
import { TitleComponent } from './textComponents/title/title.component';
import { ButtonComponent } from './buttons/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    TitleComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
