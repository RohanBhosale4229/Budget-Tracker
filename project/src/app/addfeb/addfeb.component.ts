import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FebService } from '../services/feb.service';
import { model } from '../model';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addfeb',
  templateUrl: './addfeb.component.html',
  styleUrls: ['./addfeb.component.css']
})
export class AddfebComponent implements OnInit {
  february: model = {
    id: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(public firebaseService: FirebaseService,public router: Router,private februaryService: FebService) {
    if (localStorage.getItem('user') ===null){
      this.router.navigate([''])
  }
  }
  @Output() isLogout = new EventEmitter<void>()
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.february.title!='' && this.february.value!=undefined){
      this.februaryService.addFebruary(this.february);
      this.february.title='';
      this.february.value=undefined;
    }

  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])

}

}
