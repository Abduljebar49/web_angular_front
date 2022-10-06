import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { HeaderSectionComponent } from '../components/header-section/header-section.component';
import { ActivitiesComponent } from './activities/activities.component';
import { DonationComponent } from './donation/donation.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    IndexComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    EventComponent,
    HeaderSectionComponent,
    ActivitiesComponent,
    DonationComponent,
    BlogComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
