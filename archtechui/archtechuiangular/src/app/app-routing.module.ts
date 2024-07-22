import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { MyCommunityComponent } from './my-community/my-community.component';
import { SearchNearbyComponent } from './search-nearby/search-nearby.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'search', component: SearchNearbyComponent },
  { path: 'sidenav', component: SidenavComponent, children: [
    { path: 'profile', component: ProfileComponent },
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutComponent },
    { path: 'help', component: HelpComponent },
    {path:'communities', component: MyCommunityComponent}
]
},
{ path: '', redirectTo : 'sidenav', pathMatch: 'full' }
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
