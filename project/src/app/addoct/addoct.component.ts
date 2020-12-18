import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { OctService } from '../services/oct.service';
import { model } from '../model';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addoct',
  templateUrl: './addoct.component.html',
  styleUrls: ['./addoct.component.css']
})
export class AddoctComponent implements OnInit {
  october: model = {
    id: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(public firebaseService: FirebaseService,public router: Router,private octoberService: OctService) {
    if (localStorage.getItem('user') ===null){
      this.router.navigate([''])
  }
  }
  @Output() isLogout = new EventEmitter<void>()
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.october.title!='' && this.october.value!=undefined){
      this.octoberService.addOctober(this.october);
      this.october.title='';
      this.october.value=undefined;
    }

  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])

}

}
