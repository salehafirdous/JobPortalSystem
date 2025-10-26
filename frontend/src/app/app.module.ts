import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { AddJobComponent } from './components/add-job/add-job.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ApplicationsComponent } from './components/applications/applications.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    JobDetailComponent,
    AddJobComponent,
    RegisterComponent,
    LoginComponent,
    CompaniesComponent,
    ApplicationsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
