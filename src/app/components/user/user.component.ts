import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age: number;
  email:string;
  address:Address;
  hobbies:string[];
  hello: any;
  posts: Post[];
  isEdit: boolean = false;

  constructor(private dataservice: DataService) { 
    console.log('constructor ran..');
}

  ngOnInit() {
    console.log('ngOnit ran..');

    this.name = 'Raj';
    this.age = 25;
    this.hobbies = ['Writing code','Listening music','Play clash of clans','Play cricket'];
    this.hello = 1;
    this.dataservice.getPosts().subscribe((posts) => {
     // console.log(posts);
     this.posts = posts;
    });
    this.email ='dhanrajsmit007@gmail.com'
    this. address = {
      locality:'Zenone Society, Wakkad',
      city: 'Pune',
      state: 'Maharashtra'
    }
  }

   onClick(){
    this.name='Arpan';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby){
   console.log(hobby);
   this.hobbies.unshift(hobby);
   return false;
  }

  deleteHobby(hobby){
   for(let i=0; i <this.hobbies.length;i++){
     if(this.hobbies[i] == hobby){
       this.hobbies.splice(i,1);

     }
   }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}

interface Address{
  locality:string,
    city:string,
    state:string;
}

interface Post{
  id: number,
  title: string,
  body: string,
  userId: number
}