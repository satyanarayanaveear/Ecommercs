import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
 
  AddProductsFrom:FormGroup = new FormGroup({});

  constructor( private productsService: ProductsService,
               private formBuilder:FormBuilder,
               private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
      this.AddProductsFrom=this.formBuilder.group({
        'title': new FormControl('',[Validators.required, Validators.minLength(4)]),
        'price': new FormControl('',[Validators.required, Validators.minLength(10000)]),
        'description': new FormControl('',[Validators.required, Validators.minLength(20)]),
        'category': new FormControl('',[Validators.required, Validators.minLength(2)]),
        'image': new FormControl('',[Validators.required, Validators.minLength(1)]),
      })
    }
    createUser(){
        this.productsService.addproduct(this.AddProductsFrom.value).subscribe(data => {
          console.log(" ========>", data);
         this._snackBar.open("user added successfully")},
         err => {
          this._snackBar.open("user not added");
        })
      }
  }


