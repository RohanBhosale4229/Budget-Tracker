import { Component, OnInit } from '@angular/core';
import { SeptService } from '../services/sept.service';
import { model } from '../model';

@Component({
  selector: 'app-september',
  templateUrl: './september.component.html',
  styleUrls: ['./september.component.css']
})
export class SeptemberComponent implements OnInit {
  september!: model[];
  editState: boolean = false;
  sepToEdit!: model | null;

  constructor(private septemberService: SeptService) {}

  ngOnInit(): void {
    //let september = [this.sep.title,this.sep.value]
    this.septemberService.getSeptember().subscribe(september =>{
      //console.log(september);
      this.september = september;
    })
  }
  deleteSeptember(event: any, j: model){
    this.septemberService.deleteSeptember(j);
    this.clearState();
  }
  editSeptember(event: any, j: model){
    this.editState = true;
    this.sepToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.sepToEdit = null;
  }
  updateSeptember(j: model){
    this.septemberService.updateSeptember(j);
    this.clearState();
  }

}
