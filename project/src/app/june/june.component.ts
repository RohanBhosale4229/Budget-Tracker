import { Component, OnInit } from '@angular/core';
import { JunService } from '../services/jun.service';
import { model } from '../model';

@Component({
  selector: 'app-june',
  templateUrl: './june.component.html',
  styleUrls: ['./june.component.css']
})
export class JuneComponent implements OnInit {
  june!: model[];
  editState: boolean = false;
  junToEdit!: model | null;

  constructor(private juneService: JunService) {}

  ngOnInit(): void {
    //let june = [this.jun.title,this.jun.value]
    this.juneService.getJune().subscribe(june =>{
      //console.log(june);
      this.june = june;
    })
  }
  deleteJune(event: any, j: model){
    this.juneService.deleteJune(j);
    this.clearState();
  }
  editJune(event: any, j: model){
    this.editState = true;
    this.junToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.junToEdit = null;
  }
  updateJune(j: model){
    this.juneService.updateJune(j);
    this.clearState();
  }


}
