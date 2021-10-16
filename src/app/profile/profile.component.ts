import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
data:any;
  constructor(private user:UsersService) { }

  ngOnInit(): void {
    this.user.getList().subscribe(result =>{
      this.data=result;
    })
  }

}
