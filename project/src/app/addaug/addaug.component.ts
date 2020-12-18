import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AugService } from '../services/aug.service';
import { model } from '../model';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addaug',
  templateUrl: './addaug.component.html',
  styleUrls: ['./addaug.component.css']
})
export class AddaugComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()
  august: model = {
    id: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(public firebaseService: FirebaseService,public router: Router,private augustService: AugService) {
    if (localStorage.getItem('user') ===null){
      this.router.navigate([''])
  }
   }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.august.title!='' && this.august.value!=undefined){
      this.augustService.addAugust(this.august);
      this.august.title='';
      this.august.value=undefined;
    }

  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])

}
}
