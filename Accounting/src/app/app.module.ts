import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card'
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './core/home/home.component';
import { ViewOrgComponent } from './components/organisation/view-org/view-org.component';
import { RegisterOrgComponent } from './components/organisation/register-org/register-org.component';
import { EditOrgComponent } from './components/organisation/edit-org/edit-org.component';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';
import { ListInvoicesComponent } from './components/invoices/list-invoices/list-invoices.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'  
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSortModule} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClientModule} from '@angular/common/http/';
import { ItemComponent } from './components/item/view-item/item.component';
import { AddItemComponent } from './components/item/add-item/add-item.component';
import { EditItemComponent } from './components/item/edit-item/edit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    HomeComponent,
    ViewOrgComponent,
    RegisterOrgComponent,
    EditOrgComponent,
    ListCustomerComponent,
    ListInvoicesComponent,
    ItemComponent,
    AddItemComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
