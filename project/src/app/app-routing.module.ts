import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
;
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
import { RegisterComponent } from './register/register.component';
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

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent,
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'january',
    component:AddjanComponent
  },
  {
    path:'february',
    component:AddfebComponent
  },
  {
    path:'march',
    component:AddmarComponent
  },
  {
    path:'april',
    component:AddaprComponent
  },
  {
    path:'may',
    component:AddmayComponent
  },
  {
    path:'june',
    component:AddjunComponent
  },
  {
    path:'july',
    component:AddjulComponent
  },
  {
    path:'august',
    component:AddaugComponent
  },
  {
    path:'september',
    component:AddseptComponent
  },
  {
    path:'october',
    component:AddnovComponent
  },
  {
    path:'november',
    component:AddnovComponent
  },
  {
    path:'december',
    component:AdddecComponent
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
