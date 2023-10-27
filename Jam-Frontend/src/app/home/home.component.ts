import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Options} from "ngx-slider-v2";
import {HomeService} from "./services/home.service";
import { Product } from '../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  jams:Product[] = [];
  minValue :number = 0;
  maxValue :number = 0;
  ngOnInit(): void {
      this.GetAllProducts()
      this.homeService.getAllProducts().subscribe(res => {
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
      this.homeService.getAllProducts().subscribe((data: Product[]) => {
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
}

