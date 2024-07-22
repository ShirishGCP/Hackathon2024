import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './app.material.module';
import { FontAwesomeModuleWrapper  } from './app.font-awesome.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogflowPopupComponent } from './dialogflow-popup/dialogflow-popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogflowPopupService } from './dialogflow-popup/dialogflow-popup.service';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { SearchNearbyComponent } from './search-nearby/search-nearby.component';
import {GoogleMap, MapAdvancedMarker } from '@angular/google-maps';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RegisterComponent } from './register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { MyCommunityComponent } from './my-community/my-community.component';
import { DetailComponent } from './detail/detail.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DialogflowPopupComponent,
    SearchNearbyComponent,
    RegisterComponent,
    SidenavComponent,
    HomeComponent,
    ProfileComponent,
    HelpComponent,
    AboutComponent,
    MyCommunityComponent,
    SearchNearbyComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FontAwesomeModuleWrapper,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    GoogleMap,
    MapAdvancedMarker ,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule
  ],
  providers: [
    DialogflowPopupService,
    provideClientHydration(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
