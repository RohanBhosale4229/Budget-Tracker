import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MayService } from '../services/may.service';
import { model } from '../model';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmay',
  templateUrl: './addmay.component.html',
  styleUrls: ['./addmay.component.css']
})
export class AddmayComponent implements OnInit {
  may: model = {
    id: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(public firebaseService: FirebaseService,public router: Router,private mayService: MayService) {
     if (localStorage.getItem('user') ===null){
    this.router.navigate([''])
}
 }
  @Output() isLogout = new EventEmitter<void>()
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.may.title!='' && this.may.value!=undefined){
      this.mayService.addMay(this.may);
      this.may.title='';
      this.may.value=undefined;
    }

  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])

}

}
