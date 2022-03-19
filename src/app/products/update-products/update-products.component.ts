import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.scss']
})
export class UpdateProductsComponent implements OnInit {
 
 dataLoaded : boolean = false;
 userId:any;
 productdetils:any;
 updateProduct:FormGroup = new FormGroup({});
 

  constructor(private activatedRoute: ActivatedRoute,
               private productsService: ProductsService,
               private formBuilder: FormBuilder,
               private snackBar: MatSnackBar) { }

  ngOnInit(): void { 
    this.dataLoaded=false;
    this.activatedRoute.params.subscribe((params:any) =>{
      this.userId = params;
      console.log('====>',this.userId);
      if(this.userId !== ''){
        this.productsService.usersId(this.userId.Id).subscribe((data:any) => {
          this.productdetils=data;
          console.log("--------->",this.productdetils)
          Object.assign(this.productdetils);
          console.log("...................>",this.productdetils);
          this.updateProduct=this.formBuilder.group({
            'title': new FormControl(new FormControl(this.productdetils.title)),
            'price': new FormControl(new FormControl(this.productdetils.price)),
            'description': new FormControl(new FormControl(this.productdetils.description)),
            'category': new FormControl(new FormControl(this.productdetils.category)),
          
            })
          this.dataLoaded = true;
          console.log("vvvvvvvvvvvvv",this.dataLoaded);
            },(err) => {
             console.log(err);
           })
          }
         }
        )
       }
       UpdateProducts(){
        this.productsService.updateproduct(this.userId, this.updateProduct.value).subscribe(data => {
          this.snackBar.open("product updated successfully")
        },
        err => {
          this.snackBar.open("user not updated");
        },
      )}
    }