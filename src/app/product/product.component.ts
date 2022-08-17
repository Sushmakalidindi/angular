import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-data.service';
import { Product } from './product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Array<Product> = [];
  constructor(private product: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.product.getproducts().subscribe((data: any[]) => {
      this.products = (data as any).products;
      console.log(this.products);
      console.log(data);
    });
  }

  getDetails(event: any, product: any): void {
    console.log(event);
    this.router.navigate(['/product', product.id]);
  }
}
