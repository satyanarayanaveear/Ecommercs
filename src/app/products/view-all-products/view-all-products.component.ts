import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.scss']
})
export class ViewAllProductsComponent implements OnInit {
  products : any;
  constructor( private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.products().subscribe( (res:any )=>{
      console.log("product", res );
      this.products = res
    },
    (err:any)=>{
      });

  }

}
