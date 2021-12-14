import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { AboutComponent } from './pages/about/about.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CouriourComponent } from './pages/couriour/couriour.component';
import { HomeComponent } from './pages/home/home.component';
import { MobilerechargeComponent } from './pages/mobilerecharge/mobilerecharge.component';
import { MoneytransferComponent } from './pages/moneytransfer/moneytransfer.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { ServiceComponent } from './pages/service/service.component';
import { TicketbookingComponent } from './pages/ticketbooking/ticketbooking.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'service',component:ServiceComponent,
   children:[
     {path:"mobile-recharge",component:MobilerechargeComponent},
     {path:"money-transfer",component:MoneytransferComponent},
     {path:"ticket-booking",component:TicketbookingComponent},
     {path:"couriour",component:CouriourComponent},
     {path:"",component:TicketbookingComponent},
   ]

},
  {path:'product',component:ProductComponent,
  children:[
    {path:"",component:ProductlistComponent},
    {path:'product-list/:id',component:ProductlistComponent}

  ]
},
  {path:'customer',component:CustomerComponent},
  {path:'career',component:CareerComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
