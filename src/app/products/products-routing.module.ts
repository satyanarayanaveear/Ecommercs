import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './add-products/add-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';
import { ProductsComponent } from './products.component';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';

const routes: Routes = [{ path: '', component: ViewAllProductsComponent },
                        { path: 'createproducts', component: AddProductsComponent},
                        { path:'search', component: ViewAllProductsByCategoryComponent},
                        { path:'search-date', component: ViewAllProductsByDateComponent},
                        { path:'delete-products/:Id', component:DeleteProductsComponent},
                        { path: 'view-products/:Id', component: ViewProductsComponent },
                        { path:'update-products/:Id', component:UpdateProductsComponent},
                        

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
