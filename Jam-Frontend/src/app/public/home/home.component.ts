import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Options } from 'ngx-slider-v2';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/_services/product.service';
import { CartService } from 'src/app/_services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  jams:Product[] = [];
  cartProducts:Product[] = [];
  minValue :number = 0;
  maxValue :number = 0;
  
  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
      this.GetAllProducts()
      this.productService.getAllProducts().subscribe(res => {
          this.jams = res;
          this.minValue = this.getMin(res);
          this.maxValue = this.getMax(res);
          this.filterForm.patchValue({
            min: this.getMin(res),
            max: this.getMax(res)
          });
          const newOptions: Options = Object.assign({}, this.options);
          newOptions.floor = this.minValue/100;
          newOptions.ceil = this.maxValue/100;
          this.options = newOptions;

      })
    }

    private getMax(jams: Product[]) {
      return Math.max(...jams.map(jam => jam.price));
    }

    private getMin(jams: Product[]) {
      return Math.min(...jams.map(j => j.price));
    }

    private GetAllProducts() {
      this.productService.getAllProducts().subscribe((data: Product[]) => {
        this.jams = data;
      })
    }

    filterForm: FormGroup = new FormGroup({
      sliderControl: new FormControl([this.minValue/100, this.maxValue/100]),
      checkboxIntense: new FormControl(),
      checkboxConfiture: new FormControl(),
      checkboxGelee: new FormControl(),
      checkboxFruitRouge: new FormControl(),
      selectControl: new FormControl(),

    });
    options: Options = {
      floor: 0,
      ceil: 10,
      step: 0.1
    };

    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }

    addToCart(addedProduct: Product, quantity: string){
      addedProduct.quantity = parseInt(quantity); 
      if(!localStorage.getItem('user')) {
        this.cartService.localAddToCart(addedProduct);
      }
    }
}
