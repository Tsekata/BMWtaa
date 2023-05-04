import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { MycarComponent } from './mycar/mycar.component';
import { AuthguardService } from './authguard.service';

const routes: Routes = [
  
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'body',
    component: BodyComponent
  },
  {
    path: 'about',
    component: AboutusComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'mycar',
    component: MycarComponent,
    canActivate: [AuthguardService]
  },
  {
    path: '**',
    redirectTo: 'body',
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
