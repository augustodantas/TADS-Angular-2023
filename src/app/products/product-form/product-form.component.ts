import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsService } from '../service/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  form : FormGroup;

  constructor(private formBuilder : FormBuilder, 
    private productService : ProductsService,
    private location: Location){
    this.form = this.formBuilder.group({
      idProduct: [null],
      name: [null],
      value: [null]
    })
  }

  onSubmit(){
    this.productService.save(this.form.value).subscribe(volta => {this.onCancel()});

  }

  onCancel(){
    this.location.back();
  }

}
