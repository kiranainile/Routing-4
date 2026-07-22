import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { UserDashboardComponent } from './shared/component/user-dashboard/user-dashboard.component';
import { ProductDashboardComponent } from './shared/component/product-dashboard/product-dashboard.component';
import { ProductComponent } from './shared/component/product/product.component';
import { GetConfirmationComponent } from './shared/component/get-confirmation/get-confirmation.component';
import { FairDashboardComponent } from './shared/component/fair-dashboard/fair-dashboard.component';
import { HomeDashboardComponent } from './shared/component/home-dashboard/home-dashboard.component';
import { UserFormComponent } from './shared/component/user-dashboard/user-form/user-form.component';
import { UserDetailsComponent } from './shared/component/user-dashboard/user-details/user-details.component';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductFormComponent } from './shared/component/product-dashboard/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FairDashboardComponent,
    UserDashboardComponent,
    ProductDashboardComponent,
    ProductComponent,
    GetConfirmationComponent,
    HomeDashboardComponent,
    UserFormComponent,
    UserDetailsComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
