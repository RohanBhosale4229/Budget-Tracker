import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './services/firebase.service';
import { JanuaryComponent } from './january/january.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    HomepageComponent,
    RegisterComponent,
    LoginComponent,
    JanuaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBFWjUzZcnA8BQuST3agPX4990JGyAHFjs",
    authDomain: "nbad-project.firebaseapp.com",
    databaseURL: "https://nbad-project-default-rtdb.firebaseio.com",
    projectId: "nbad-project",
    storageBucket: "nbad-project.appspot.com",
    messagingSenderId: "643717293629",
    appId: "1:643717293629:web:96bb1eb9cc2510ed59ec54"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
