import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, take, map } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private http: HttpClient) { 
    let existingProducts = JSON.parse(localStorage.getItem('localCart') as string);
    if(!existingProducts) {
      existingProducts = [];
    }
    let sum = 0;
    existingProducts.forEach((product: Product) => sum += product.quantity)
    console.log(sum)
    this.itemsSubjects.next(existingProducts);
    this.itemsQuantitySubjects.next(sum);
  }

  private itemsSubjects = new BehaviorSubject<Product[]>([]);
  private itemsQuantitySubjects = new BehaviorSubject<number>(0);
  items$ = this.itemsSubjects.asObservable();
  itemsQuantity$ = this.itemsQuantitySubjects.asObservable();

  localAddToCart(product: Product) {
    this.items$.pipe(
      take(1),
      map((products) => {
        let found = false;
        for (let index in products) {
          if ( products[index].id === product.id) {
            products[index].quantity += product.quantity;
            found = true;
            break;
          }
        }
        if(!found) {
        products.push(product);
        }
        localStorage.setItem('localCart', JSON.stringify(products));
      }),
    ).subscribe();
    this.itemsQuantitySubjects.next(this.itemsQuantitySubjects.value + product.quantity);
  }

  checkout(cart: Product[]) {
    this.http.post('http://localhost:3000/api/checkout', cart).subscribe(async(res: any) => {
    })
  }
}
