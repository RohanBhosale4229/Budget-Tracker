import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DecService } from '../services/dec.service';
import { model } from '../model';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddec',
  templateUrl: './adddec.component.html',
  styleUrls: ['./adddec.component.css']
})
export class AdddecComponent implements OnInit {
  december: model = {
    id: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(public firebaseService: FirebaseService,public router: Router,private decemberService: DecService) {
    if (localStorage.getItem('user') ===null){
      this.router.navigate([''])
  }
   }
  @Output() isLogout = new EventEmitter<void>()
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.december.title!='' && this.december.value!=undefined){
      this.decemberService.addDecember(this.december);
      this.december.title='';
      this.december.value=undefined;
    }

  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])

}

}
