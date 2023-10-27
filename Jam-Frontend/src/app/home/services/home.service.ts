import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {;
    return this.http.get<Product[]>("http://localhost:8000/api/products.json?page=1");
  }

}
