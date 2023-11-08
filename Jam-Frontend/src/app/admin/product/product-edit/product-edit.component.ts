import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  constructor(private activated: ActivatedRoute){}

  ngOnInit(): void {
    this.activated.params.subscribe(params => {
      console.log(params);
    });
  }
}
