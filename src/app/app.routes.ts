import { Routes } from '@angular/router';
import { LoginPages } from './+public/login-pages/login-pages';
import { PrivateTmeplate } from './+private/private-tmeplate/private-tmeplate';
import { BooksPage } from './+private/books-page/books-page';
import { MemberPage } from './+private/member-page/member-page';
import { ReportsPage } from './+private/reports-page/reports-page';
import { DashboardPage } from './+private/dashboard-page/dashboard-page';
import { privateGuard } from './+shared/private-guard';

export const routes: Routes = [
    {path:'login',component:LoginPages},
    {path:'private',canActivate:[privateGuard],component:PrivateTmeplate,children:[
          {path:'books',component:BooksPage},
          {path:'members',component:MemberPage},
          {path:'borrows',component:BooksPage},
          {path:'reports',component:ReportsPage},
          {path:'doshboard',component:DashboardPage},
          {path:'**',redirectTo:'doshboard',pathMatch:'prefix'},
          {path:'**',redirectTo:'doshboard'}

    ]},
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'**',redirectTo:'login'},

];
