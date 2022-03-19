import { Component, OnInit } from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.scss']
})
export class DeleteProductsComponent implements OnInit {
  userId:any
constructor(  private activatedRoute: ActivatedRoute,
                private productsService: ProductsService,
                private  router: Router,
                private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data:any )=> {
     this.userId = data;
       console.log("-------->",data)
      if(this.userId){
        this.productsService.deleteUser(this.userId.Id).subscribe((data:any ) =>{
        console.log("==========>",data)
         this.snackbar.open("product was deleted")
        },
       err => {
      this.snackbar.open("product was not deleted")
        })
       }
      }
    )    
   }
  }


 
