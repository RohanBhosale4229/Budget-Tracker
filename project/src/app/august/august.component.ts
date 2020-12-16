import { Component, OnInit } from '@angular/core';
import { AugService } from '../services/aug.service';
import { model } from '../model';

@Component({
  selector: 'app-august',
  templateUrl: './august.component.html',
  styleUrls: ['./august.component.css']
})
export class AugustComponent implements OnInit {
  august!: model[];
  editState: boolean = false;
  augToEdit!: model | null;

  constructor(private augustService: AugService) {}

  ngOnInit(): void {
    //let august = [this.aug.title,this.aug.value]
    this.augustService.getAugust().subscribe(august =>{
      //console.log(august);
      this.august = august;
    })
  }
  deleteAugust(event: any, j: model){
    this.augustService.deleteAugust(j);
    this.clearState();
  }
  editAugust(event: any, j: model){
    this.editState = true;
    this.augToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.augToEdit = null;
  }
  updateAugust(j: model){
    this.augustService.updateAugust(j);
    this.clearState();
  }

}
