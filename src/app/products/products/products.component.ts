import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../service/products.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products : Observable<Product[]>;

  displayedColumns = ['idProduct', 'name', 'value',"actions"];

  private webSocket: WebSocket;
  
  constructor(private productService: ProductsService, 
    private router: Router,
    private route: ActivatedRoute){

    this.webSocket = new WebSocket('ws://localhost:8080/stocks');
    this.webSocket.onmessage = (event) => {
        console.log(JSON.parse(event.data));
    }; 

    this.products = this.productService.list();



  }
  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

  onDelete(idProduct : string){
    this.productService.delete(idProduct).subscribe(  );
  }
}
