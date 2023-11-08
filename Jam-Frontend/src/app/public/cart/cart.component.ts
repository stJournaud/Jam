import { Component } from '@angular/core';
import { CartService } from 'src/app/_services/cart.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.products = JSON.parse(localStorage.getItem('localCart') as string) || [];
    this.getTotalPrice()
  }

  getTotalPrice() {
    let sum = 0;
    this.products.forEach(product => {
      sum += product.price * product.quantity;
    })
    this.totalPrice = sum;
  }

  onCheckout() {
    this.cartService.checkout(this.products);
  }

}
