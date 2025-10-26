import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { AuthGuard } from './guards/auth.guard';
import { EmployerGuard } from './guards/employer.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'job-detail/:id', component: JobDetailComponent, canActivate: [AuthGuard] },
  { path: 'add-job', component: AddJobComponent, canActivate: [AuthGuard, EmployerGuard] },
  { path: 'companies', component: CompaniesComponent, canActivate: [AuthGuard] },
  { path: 'applications', component: ApplicationsComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
