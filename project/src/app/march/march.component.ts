import { Component, OnInit } from '@angular/core';
import { MarService } from '../services/mar.service';
import { model } from '../model';

@Component({
  selector: 'app-march',
  templateUrl: './march.component.html',
  styleUrls: ['./march.component.css']
})
export class MarchComponent implements OnInit {
  march!: model[];
  editState: boolean = false;
  marToEdit!: model | null;

  constructor(private marchService: MarService) {}

  ngOnInit(): void {
    //let march = [this.mar.title,this.mar.value]
    this.marchService.getMarch().subscribe(march =>{
      //console.log(march);
      this.march = march;
    })
  }
  deleteMarch(event: any, j: model){
    this.marchService.deleteMarch(j);
    this.clearState();
  }
  editMarch(event: any, j: model){
    this.editState = true;
    this.marToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.marToEdit = null;
  }
  updateMarch(j: model){
    this.marchService.updateMarch(j);
    this.clearState();
  }
}
