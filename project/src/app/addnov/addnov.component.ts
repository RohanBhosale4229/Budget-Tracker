import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NovService } from '../services/nov.service';
import { model } from '../model';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addnov',
  templateUrl: './addnov.component.html',
  styleUrls: ['./addnov.component.css']
})
export class AddnovComponent implements OnInit {
  november: model = {
    id: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(public firebaseService: FirebaseService,public router: Router,private novemberService: NovService) {
    if (localStorage.getItem('user') ===null){
      this.router.navigate([''])
  }
  }
  @Output() isLogout = new EventEmitter<void>()
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.november.title!='' && this.november.value!=undefined){
      this.novemberService.addNovember(this.november);
      this.november.title='';
      this.november.value=undefined;
    }

  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])

}

}
