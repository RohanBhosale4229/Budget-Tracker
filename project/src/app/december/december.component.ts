import { Component, OnInit } from '@angular/core';
import { DecService } from '../services/dec.service';
import { model } from '../model';

@Component({
  selector: 'app-december',
  templateUrl: './december.component.html',
  styleUrls: ['./december.component.css']
})
export class DecemberComponent implements OnInit {
  december!: model[];
  editState: boolean = false;
  decToEdit!: model | null;

  constructor(private decemberService: DecService) {}

  ngOnInit(): void {
    //let december = [this.dec.title,this.dec.value]
    this.decemberService.getDecember().subscribe(december =>{
      //console.log(december);
      this.december = december;
    })
  }
  deleteDecember(event: any, j: model){
    this.decemberService.deleteDecember(j);
    this.clearState();
  }
  editDecember(event: any, j: model){
    this.editState = true;
    this.decToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.decToEdit = null;
  }
  updateDecember(j: model){
    this.decemberService.updateDecember(j);
    this.clearState();
  }

}
