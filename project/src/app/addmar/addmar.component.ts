import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MarService } from '../services/mar.service';
import { model } from '../model';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmar',
  templateUrl: './addmar.component.html',
  styleUrls: ['./addmar.component.css']
})
export class AddmarComponent implements OnInit {
  march: model = {
    id: localStorage.getItem('userid'),
    title:'',
    value:undefined
  }
  constructor(public firebaseService: FirebaseService,public router: Router,private marchService: MarService) {
    if (localStorage.getItem('user') ===null){
      this.router.navigate([''])
  }
   }
  @Output() isLogout = new EventEmitter<void>()
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.march.title!='' && this.march.value!=undefined){
      this.marchService.addMarch(this.march);
      this.march.title='';
      this.march.value=undefined;
    }

  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])

}
}
