import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OrdersModule } from './orders/orders.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SiteFramWorkModule } from './site-fram-work/site-fram-work.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OrdersModule,
    MatIconModule,
    MatToolbarModule,
    SiteFramWorkModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
