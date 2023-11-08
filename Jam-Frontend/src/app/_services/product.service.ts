import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]> {;
    return this.httpClient.get<Product[]>("http://localhost:8000/api/products.json?page=1");
  }
}
