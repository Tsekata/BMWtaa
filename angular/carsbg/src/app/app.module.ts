import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './authguard.service';
import { MycarComponent } from './mycar/mycar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AboutusComponent,
    LoginComponent,
    MycarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
