import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpaces } from "./products/convert-to-spaces.pipe";
import { StarComponent } from "./shared/star.component";
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from '@angular/router';
import { ProductGaurdService } from './products/product-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component:ProductListComponent},
      {path: 'products/:id',
      canActivate: [ProductGaurdService],
      component:ProductDetailComponent},
      {path: 'welcome', component:WelcomeComponent},
      {path: '', redirectTo:'welcome', pathMatch:'full'},
      {path: '**', redirectTo:'welcome', pathMatch:'full'}

    ])
  ],
  providers: [ProductGaurdService],
  bootstrap: [AppComponent]
}) 
export class AppModule { }
