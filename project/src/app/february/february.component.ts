import { Component, OnInit } from '@angular/core';
import { FebService } from '../services/feb.service';
import { model } from '../model';

@Component({
  selector: 'app-february',
  templateUrl: './february.component.html',
  styleUrls: ['./february.component.css']
})
export class FebruaryComponent implements OnInit {
  february!: model[];
  editState: boolean = false;
  febToEdit!: model | null;

  constructor(private februaryService: FebService) {}

  ngOnInit(): void {
    //let february = [this.feb.title,this.feb.value]
    this.februaryService.getFebruary().subscribe(february =>{
      //console.log(february);
      this.february = february;
    })
  }
  deleteFebruary(event: any, j: model){
    this.februaryService.deleteFebruary(j);
    this.clearState();
  }
  editFebruary(event: any, j: model){
    this.editState = true;
    this.febToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.febToEdit = null;
  }
  updateFebruary(j: model){
    this.februaryService.updateFebruary(j);
    this.clearState();
  }
}
