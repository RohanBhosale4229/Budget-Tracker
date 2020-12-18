import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SeptService } from '../services/sept.service';
import { model } from '../model';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addsept',
  templateUrl: './addsept.component.html',
  styleUrls: ['./addsept.component.css']
})
export class AddseptComponent implements OnInit {
  september: model = {
    id: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(public firebaseService: FirebaseService,public router: Router,private septemberService: SeptService) {
    if (localStorage.getItem('user') ===null){
      this.router.navigate([''])
  }
   }
  @Output() isLogout = new EventEmitter<void>()
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.september.title!='' && this.september.value!=undefined){
      this.septemberService.addSeptember(this.september);
      this.september.title='';
      this.september.value=undefined;
    }

  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])

}


}
