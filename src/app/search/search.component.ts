import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
list:any;
searchTerm:any;

  constructor(private user:UsersService) { }

  ngOnInit(): void {
    this.user.getList().subscribe(res =>{
      this.list=res;
    })
  
  }
  

}
