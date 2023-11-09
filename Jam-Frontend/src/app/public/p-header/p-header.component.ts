import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TokenService } from 'src/app/_services/token.service';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-p-header',
  templateUrl: './p-header.component.html',
  styleUrls: ['./p-header.component.css']
})
export class PHeaderComponent implements OnInit {
  itemsQuantity$ = this.cartService.itemsQuantity$
  isLogged!: boolean;
  constructor(
    private cartService: CartService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
  }

  logout(): void {
    this.tokenService.clearToken();
  } 
}
  


