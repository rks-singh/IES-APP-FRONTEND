import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewCaseWorkerComponent } from './view-case-worker/view-case-worker.component';
import { CreateCaseWorkerComponent } from './create-case-worker/create-case-worker.component';

export const routes: Routes = [

    {path:'', component: LoginComponent, pathMatch:'full'},
    {path: 'login', component: LoginComponent},
    {path: 'login/register', component: RegisterComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'create-cw', component: CreateCaseWorkerComponent},
    {path: 'view-cw', component: ViewCaseWorkerComponent}
];
