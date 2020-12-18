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

  constructor(public firebaseService: FirebaseService, public router: Router) {
    if (localStorage.getItem('user') ===null){
      this.router.navigate([''])
    }
   }
  ngOnInit(): void {

      // setTimeout(() => {
      //   if (confirm('click OK to be logged in')){
      //     location.reload();
      //   }
      //   else{
      //     setTimeout(() =>{
      //       this.firebaseService.logout()
      //       this.isLogout.emit()
      //       this.router.navigate([''])
      //     }, 20000);
      //   }
      // }, 40000)
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
