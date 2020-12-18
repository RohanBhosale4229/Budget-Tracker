import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JulService } from '../services/jul.service';
import { model } from '../model';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addjul',
  templateUrl: './addjul.component.html',
  styleUrls: ['./addjul.component.css']
})
export class AddjulComponent implements OnInit {
  july: model = {
    id: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(public firebaseService: FirebaseService,public router: Router,private julyService: JulService) {
    if (localStorage.getItem('user') ===null){
      this.router.navigate([''])
  }
   }
  @Output() isLogout = new EventEmitter<void>()
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.july.title!='' && this.july.value!=undefined){
      this.julyService.addJuly(this.july);
      this.july.title='';
      this.july.value=undefined;
    }

  }

  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])

}

}
