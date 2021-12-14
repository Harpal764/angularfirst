import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './customer/customer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ChangecolorDirective } from './tools/changecolor.directive';
import { GenderformatePipe } from './tools/pipes/genderformate.pipe';
import { NameformatePipe } from './tools/pipes/nameformate.pipe';
import { SearchcustomerPipe } from './tools/pipes/searchcustomer.pipe';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { ProductComponent } from './pages/product/product.component';
import { CareerComponent } from './pages/career/career.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MobilerechargeComponent } from './pages/mobilerecharge/mobilerecharge.component';
import { TicketbookingComponent } from './pages/ticketbooking/ticketbooking.component';
import { MoneytransferComponent } from './pages/moneytransfer/moneytransfer.component';
import { CouriourComponent } from './pages/couriour/couriour.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomerComponent,
    SigninComponent,
    SignupComponent,
    ChangecolorDirective,
    GenderformatePipe,
    NameformatePipe,
    SearchcustomerPipe,
    HomeComponent,
    ServiceComponent,
    ProductComponent,
    CareerComponent,
    AboutComponent,
    ContactComponent,
    MobilerechargeComponent,
    TicketbookingComponent,
    MoneytransferComponent,
    CouriourComponent,
    ProductlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
