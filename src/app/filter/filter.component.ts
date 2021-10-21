import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
list:any;
search:any;
searchpost:any;
  constructor( private user: UsersService) { }

  ngOnInit(): void {
    this.user.getList().subscribe(res =>{
      this.list=res;
    })

  }

  
}
