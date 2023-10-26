import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Options} from "ngx-slider-v2";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  jams = [
    {
      "id": 1,
      "name": "Cerises",
      "description": null,
      "image": "cerises.jpeg",
      "price": 390
    },
    {
      "id": 2,
      "name": "Myrtille",
      "description": null,
      "image": "myrtille.jpeg",
      "price": 390
    },
    {
      "id": 3,
      "name": "Prune",
      "description": null,
      "image": "prune.jpeg",
      "price": 310
    },
    {
      "id": 4,
      "name": "Figue",
      "description": null,
      "image": "figue.jpeg",
      "price": 330
    },
    {
      "id": 5,
      "name": "Fraise",
      "description": null,
      "image": "fraise.jpeg",
      "price": 370
    },
    {
      "id": 6,
      "name": "Framboise",
      "description": null,
      "image": "framboise.jpeg",
      "price": 420
    },
    {
      "id": 7,
      "name": "Gelée Cassis",
      "description": null,
      "image": "gelee-cassis.jpeg",
      "price": 370
    },
    {
      "id": 8,
      "name": "Gelée Coings",
      "description": null,
      "image": "gelee-coings.jpeg",
      "price": 370
    },
    {
      "id": 9,
      "name": "Intense Abricot",
      "description": null,
      "image": "intense-abricot.jpeg",
      "price": 470
    },
    {
      "id": 10,
      "name": "Intense Fraise",
      "description": null,
      "image": "intense-fraise.jpeg",
      "price": 490
    }
  ];
  minProductPrice = this.jams.filter(j => j.price).reduce((min, j) => Math.min(min, j.price), Infinity);
  maxProductPrice = this.jams.filter(j => j.price).reduce((max, j) => Math.max(max, j.price), 0);
  someRange = [this.minProductPrice , this.maxProductPrice];

  sliderForm: FormGroup = new FormGroup({
    sliderControl: new FormControl([this.minProductPrice/100, this.maxProductPrice/100])
  });
  options: Options = {
    floor: this.minProductPrice/100,
    ceil: this.maxProductPrice/100,
    step: 0.1
  };

  resetForm(): void {
    this.sliderForm.reset({sliderControl: [20, 80]});
  }

  onSubmit(): void {
    console.log(this.sliderForm.value);
  }
}
