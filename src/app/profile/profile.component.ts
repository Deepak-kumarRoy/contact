import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
data:any;
id:any;
prof:any[]=[];

  constructor(private user:UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(res =>{
      this.id=res.id;
    })

    this.user.getList().subscribe(res =>{
     this.data=res;
     for(var i=0; i<this.data.length;i++){
       if(this.data[i].id==this.id)
       {
        this.prof.push(this.data[i]);
  
       }
     }
    })
  }

}
