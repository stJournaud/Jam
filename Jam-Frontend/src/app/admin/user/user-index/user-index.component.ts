import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  userList: any = [];

  constructor (private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8000/users').subscribe(
      (res: any) => {
        this.userList = res.data
      }
    )
  }

}
