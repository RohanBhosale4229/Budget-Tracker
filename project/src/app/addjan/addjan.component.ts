import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JanService } from '../services/jan.service';
import { model } from '../model';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addjan',
  templateUrl: './addjan.component.html',
  styleUrls: ['./addjan.component.css']
})
export class AddjanComponent implements OnInit {
  january: model = {
    id: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(public firebaseService: FirebaseService,public router: Router,private januaryService: JanService) {
    if (localStorage.getItem('user') ===null){
      this.router.navigate([''])
  }
   }
  @Output() isLogout = new EventEmitter<void>()
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.january.title!='' && this.january.value!=undefined){
      this.januaryService.addJanuary(this.january);
      this.january.title='';
      this.january.value=undefined;
    }

  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])

}
}
