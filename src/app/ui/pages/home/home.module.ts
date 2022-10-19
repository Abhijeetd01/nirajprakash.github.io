import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatSliderModule } from '@angular/material/slider';
import {  MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../../@shared/shared.module';
import { HomeTopComponent } from './home-top/home-top.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { FooterModule } from '../../common/footer/footer.module';
import { HomePlatformsComponent } from './home-platforms/home-platforms.component';
import { HomeExpertiseComponent } from './home-expertise/home-expertise.component';
import { ExpertiseItemComponent } from './home-expertise/expertise-item/expertise-item.component';
import { TechItemComponent } from './home-expertise/tech-item/tech-item.component';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeShowcasesComponent } from './home-showcases/home-showcases.component';
import { AppItemComponent } from './home-showcases/app-item/app-item.component';
import { IconsComponent } from './home-showcases/icons/icons.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeTopComponent,
    HomeAboutComponent,
    HomePlatformsComponent,
    HomeExpertiseComponent,
    ExpertiseItemComponent,
    TechItemComponent,
    HomeContactComponent,
    HomeShowcasesComponent,
    AppItemComponent,
    IconsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatButtonModule,
    FooterModule,
    ReactiveFormsModule,
    FormsModule,
    
    MatFormFieldModule,
    MatInputModule,
    
  ]
})
export class HomeModule { }
