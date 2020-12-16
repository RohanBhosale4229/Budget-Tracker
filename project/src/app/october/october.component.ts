import { Component, OnInit } from '@angular/core';
import { OctService } from '../services/oct.service';
import { model } from '../model';

@Component({
  selector: 'app-october',
  templateUrl: './october.component.html',
  styleUrls: ['./october.component.css']
})
export class OctoberComponent implements OnInit {
  october!: model[];
  editState: boolean = false;
  octToEdit!: model | null;

  constructor(private octoberService: OctService) {}

  ngOnInit(): void {
    //let october = [this.oct.title,this.oct.value]
    this.octoberService.getOctober().subscribe(october =>{
      //console.log(october);
      this.october = october;
    })
  }
  deleteOctober(event: any, j: model){
    this.octoberService.deleteOctober(j);
    this.clearState();
  }
  editOctober(event: any, j: model){
    this.editState = true;
    this.octToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.octToEdit = null;
  }
  updateOctober(j: model){
    this.octoberService.updateOctober(j);
    this.clearState();
  }
}
