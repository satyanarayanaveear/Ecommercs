import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {
  
   usersId : any ;
   viewDetiles :any
  constructor( private activatedRoute: ActivatedRoute,
               private productsService: ProductsService) { }

  ngOnInit(): void {
  
    this.activatedRoute.params.subscribe((params:any) => {
      console.log("------->",params);
      this.usersId = params ;
       console.log("------->",this.usersId);
       this.productsService.usersId(this.usersId.Id).subscribe(res =>
       {
        console.log("=====>",res);
        this.viewDetiles = res;
        console.log("my user resp",this.viewDetiles);
        
       });
       

    })
     
    
  }

}
