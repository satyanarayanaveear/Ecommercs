import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav/sidenav';
import { SidenavService } from '../sidenav.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
 

  showFiller = false;
  constructor( ) { }

  ngOnInit(): void {
     
  
  }

}
