import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly API = '/api/products';
  constructor(private httpClient: HttpClient) { }
  list() {
    return this.httpClient.get<Product[]>(this.API);
  }
  save(record : Product){
    return this.httpClient.post<Product>(this.API,record);
  }
  delete(idProduct : String){
    return this.httpClient.delete(this.API+"/" +idProduct);
  }
}
