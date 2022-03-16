import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.scss']
})
export class UpdateProductsComponent implements OnInit {
 UpdateId = 0;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void { 
    this.activatedRoute.params.subscribe((res:any)=>{
      this.UpdateId = res.Id;
    })
  }

}
