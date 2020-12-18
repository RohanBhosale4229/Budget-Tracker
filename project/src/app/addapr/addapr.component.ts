import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AprService } from '../services/apr.service';
import { FirebaseService } from '../services/firebase.service';
import { model } from '../model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addapr',
  templateUrl: './addapr.component.html',
  styleUrls: ['./addapr.component.css']
})
export class AddaprComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()
  april: model = {
    id: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }

  constructor(public firebaseService: FirebaseService,public router: Router,private aprilService: AprService) {
    if (localStorage.getItem('user') ===null){
      this.router.navigate([''])
  }
}

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.april.title!='' && this.april.value!=undefined){
      this.aprilService.addApril(this.april);
      this.april.title='';
      this.april.value=undefined;
    }
  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])

}
}
