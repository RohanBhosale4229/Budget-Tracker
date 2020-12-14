import { Component, OnInit } from '@angular/core';
import { model } from '../model';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from "@angular/fire/firestore"

@Component({
  selector: 'app-january',
  templateUrl: './january.component.html',
  styleUrls: ['./january.component.css']
})
export class JanuaryComponent implements OnInit {
  _db:AngularFirestore;

  budgets: Observable<any[]>
  constructor(public afAuth: AngularFireAuth, db: AngularFirestore)  {
    this.afAuth.signInWithCredential;
    this.budgets = db.collection('january').valueChanges();
    this._db = db;

  }

  ngOnInit(): void {
  }

  addbudget(n: string, b: number, u: number){
    let jan = this._db.collection<model>('january');
    jan.add({Name: n, budget: b, used: u });
  }

}
