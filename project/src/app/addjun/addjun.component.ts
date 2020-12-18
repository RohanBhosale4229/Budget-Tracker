import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JunService } from '../services/jun.service';
import { model } from '../model';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addjun',
  templateUrl: './addjun.component.html',
  styleUrls: ['./addjun.component.css']
})
export class AddjunComponent implements OnInit {
  june: model = {
    id: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(public firebaseService: FirebaseService,public router: Router,private juneService: JunService) {
    if (localStorage.getItem('user') ===null){
      this.router.navigate([''])
  }
  }
  @Output() isLogout = new EventEmitter<void>()
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.june.title!='' && this.june.value!=undefined){
      this.juneService.addJune(this.june);
      this.june.title='';
      this.june.value=undefined;
    }

  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])

}
}
