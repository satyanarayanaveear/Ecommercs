import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import {MatCardModule} from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule

  ],
  exports:[
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
 
  ]
})
export class SiteFramWorkModule { }
