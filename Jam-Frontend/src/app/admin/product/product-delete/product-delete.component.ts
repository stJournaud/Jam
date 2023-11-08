import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  constructor(private activated: ActivatedRoute){}

  ngOnInit(): void {
    this.activated.params.subscribe(params => {
      console.log(params);
    });
  }
}
