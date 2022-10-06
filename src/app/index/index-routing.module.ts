import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActivitiesComponent } from './activities/activities.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DonationComponent } from './donation/donation.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent,
    children:[
      {
        path:'',
        component:HomeComponent
      },
      {
        path:'about',
        component:AboutComponent
      },
      {
        path:'event',
        component:EventComponent
      },
      {
        path:'activity',
        component:ActivitiesComponent
      },
      {
        path:'donation',
        component:DonationComponent
      },
      {
        path:'blog',
        component:BlogComponent
      },
      {
        path:'contact-us',
        component:ContactUsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
