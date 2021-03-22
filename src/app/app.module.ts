import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule} from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const appRoutes:Routes=[
  {path:'',component: HomePageComponent},
  {path:'about',component: AboutPageComponent},
  {path:'contact',component: ContactPageComponent},
  {path:'product',component: ProductPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
