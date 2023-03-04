import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms/forms.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DistrictComponent } from './pages/district/district.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SingleComponent } from './pages/single/single.component';

const routes: Routes = [
  {
path:'',
component:HomepageComponent,
},
{
path:'contact',
component:ContactComponent
},
{
  path:'district',
  component:DistrictComponent
},
{
  path:'signup',
  component:SignupComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'single',
  component:SingleComponent
},
{
  path:'forms',
  component:FormsComponent
}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
