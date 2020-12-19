import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './services/firebase.service';
import { JanuaryComponent } from './january/january.component';
import { FebruaryComponent } from './february/february.component';
import { MarchComponent } from './march/march.component';
import { AprilComponent } from './april/april.component';
import { MayComponent } from './may/may.component';
import { JuneComponent } from './june/june.component';
import { JulyComponent } from './july/july.component';
import { AugustComponent } from './august/august.component';
import { SeptemberComponent } from './september/september.component';
import { OctoberComponent } from './october/october.component';
import { NovemberComponent } from './november/november.component';
import { DecemberComponent } from './december/december.component';
import { AddjanComponent } from './addjan/addjan.component';
import { AddfebComponent } from './addfeb/addfeb.component';
import { AddmarComponent } from './addmar/addmar.component';
import { AddaprComponent } from './addapr/addapr.component';
import { AddmayComponent } from './addmay/addmay.component';
import { AddjunComponent } from './addjun/addjun.component';
import { AddjulComponent } from './addjul/addjul.component';
import { AddaugComponent } from './addaug/addaug.component';
import { AddseptComponent } from './addsept/addsept.component';
import { AddoctComponent } from './addoct/addoct.component';
import { AddnovComponent } from './addnov/addnov.component';
import { AdddecComponent } from './adddec/adddec.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomepageComponent,
    RegisterComponent,
    LoginComponent,
    JanuaryComponent,
    FebruaryComponent,
    MarchComponent,
    AprilComponent,
    MayComponent,
    JuneComponent,
    JulyComponent,
    AugustComponent,
    SeptemberComponent,
    OctoberComponent,
    NovemberComponent,
    DecemberComponent,
    AddjanComponent,
    AddfebComponent,
    AddmarComponent,
    AddaprComponent,
    AddmayComponent,
    AddjunComponent,
    AddjulComponent,
    AddaugComponent,
    AddseptComponent,
    AddoctComponent,
    AddnovComponent,
    AdddecComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,

    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: ,
    authDomain: ,
    databaseURL: ,
    projectId: ,
    storageBucket: ,
    messagingSenderId: ,
    appId: 
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
