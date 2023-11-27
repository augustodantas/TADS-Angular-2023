import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product } from '../models/product';
import { WebSocketConnector } from './web.socket.connector';
import { interval } from 'rxjs';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly API = '/api/products';

  constructor(private httpClient: HttpClient) { 
  }
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
