import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 



  baseUrl  = 'https://fakestoreapi.com/' 
  

  constructor( private httpClient: HttpClient) { }
  
products() {

  return this.httpClient.get(this.baseUrl + 'products/');

  }
 usersId( Id : any) {

   return this.httpClient.get( this.baseUrl + 'products/' + Id );
 }
 deleteUser(id: any) {
    return this.httpClient.delete(this.baseUrl + 'products/' + id);
  }
  addproduct(userObj: any){
    return  this.httpClient.post(this.baseUrl + 'products/' , userObj);
    }
    updateproduct ( Id: any, userObj: any) {
      return  this.httpClient.put(this.baseUrl + 'products/' + Id, userObj);
    }

}