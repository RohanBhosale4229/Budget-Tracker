import { Component, OnInit } from '@angular/core';
import { MayService } from '../services/may.service';
import { model } from '../model';

@Component({
  selector: 'app-may',
  templateUrl: './may.component.html',
  styleUrls: ['./may.component.css']
})
export class MayComponent implements OnInit {
  may!: model[];
  editState: boolean = false;
  mayToEdit!: model | null;

  constructor(private mayService: MayService) {}

  ngOnInit(): void {
    //let may = [this.may.title,this.may.value]
    this.mayService.getMay().subscribe(may =>{
      //console.log(may);
      this.may = may;
    })
  }
  deleteMay(event: any, j: model){
    this.mayService.deleteMay(j);
    this.clearState();
  }
  editMay(event: any, j: model){
    this.editState = true;
    this.mayToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.mayToEdit = null;
  }
  updateMay(j: model){
    this.mayService.updateMay(j);
    this.clearState();
  }

}
