import { Component, OnInit } from '@angular/core';
import { JanService } from '../services/jan.service';
import { model } from '../model';

@Component({
  selector: 'app-january',
  templateUrl: './january.component.html',
  styleUrls: ['./january.component.css']
})
export class JanuaryComponent implements OnInit {
  january!: model[];
  editState: boolean = false;
  janToEdit!: model | null;

  constructor(private januaryService: JanService) {}

  ngOnInit(): void {
    //let january = [this.jan.title,this.jan.value]
    this.januaryService.getJanuary().subscribe(january =>{
      //console.log(january);
      this.january = january;
    })
  }
  deleteJanuary(event: any, j: model){
    this.januaryService.deleteJanuary(j);
    this.clearState();
  }
  editJanuary(event: any, j: model){
    this.editState = true;
    this.janToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.janToEdit = null;
  }
  updateJanuary(j: model){
    this.januaryService.updateJanuary(j);
    this.clearState();
  }
}
