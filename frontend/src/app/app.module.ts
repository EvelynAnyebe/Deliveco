import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HOMEComponent } from './home/home.component';
import { ABOUTComponent } from './about/about.component';
import { CONTACTComponent } from './contact/contact.component';
import { NAVComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    ABOUTComponent,
    CONTACTComponent,
    NAVComponent,
    FooterComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([
      {path: 'home', component: HOMEComponent},
      {path: 'about', component: ABOUTComponent},
      {path: 'login', component: CONTACTComponent},
      {path: 'signup', component: SignupComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
