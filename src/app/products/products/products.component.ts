import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../service/products.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { WebSocketConnector } from '../service/web.socket.connector';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products : Observable<Product[]>;

  displayedColumns = ['idProduct', 'name', 'value',"actions"];

  //private webSocket: WebSocket;
  private readonly API = '/api/products';
  private webSocketConnector: WebSocketConnector;
  
  constructor(private productService: ProductsService, 
    private router: Router,
    private route: ActivatedRoute){
      

    //this.webSocket = new WebSocket('ws://localhost:8080/stocks');
    //this.webSocket.onmessage = (event) => {
    //    console.log(JSON.parse(event.data));
    //}; 

    this.webSocketConnector = new WebSocketConnector(
      'http://localhost:8080/api/socket',
      '/statusProcessor',
      this.espera.bind(this)
    );

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

  espera(message : any = {}){
    console.log(message);
    this.products = this.productService.list();
    console.log("Foi....");
  }

}
