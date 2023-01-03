import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { HeaderSectionComponent } from '../components/header-section/header-section.component';
import { ActivitiesComponent } from './activities/activities.component';
import { DonationComponent } from './donation/donation.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    IndexComponent,
    HomeComponent,
    AboutComponent,
    EventComponent,
    HeaderSectionComponent,
    ActivitiesComponent,
    DonationComponent,
    BlogComponent,
    ContactUsComponent,
  ],
  imports: [CommonModule, IndexRoutingModule, SharedModule],
})
export class IndexModule {}
