import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
list:any;
  constructor(private user:UsersService) { }

  ngOnInit(): void {
    this.user.getList().subscribe(result =>{
      this.list=result;
    })
  }

}
