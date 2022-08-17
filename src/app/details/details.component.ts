import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product.model';
import { appConstant } from '../app.constant';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product: Product | any = '';
  id: number | String = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.getProduct((data as any).id);
    });
  }
  getProduct(id: number) {
    this.http
      .get(`${environment.api}${appConstant.apiRoute.products}/${id}`)
      .subscribe((data) => {
        this.product = data;
        console.log(data);
      });
  }
}
