import { Component,Output, EventEmitter, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()

  constructor(public firebaseService: FirebaseService, public router: Router) { }
  ngOnInit(): void {

  }



  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
    this.router.navigate([''])

}

onNavigate(r:string){
  r= r.toLowerCase()
  console.log(r)
  this.router.navigate([r])
}

}
