import { Component, OnInit } from '@angular/core';
import { AprService } from '../services/apr.service';
import { model } from '../model';

@Component({
  selector: 'app-april',
  templateUrl: './april.component.html',
  styleUrls: ['./april.component.css']
})
export class AprilComponent implements OnInit {
  april!: model[];
  editState: boolean = false;
  aprToEdit!: model | null;

  constructor(private aprilService: AprService) {}

  ngOnInit(): void {
    //let april = [this.apr.title,this.apr.value]
    this.aprilService.getApril().subscribe(april =>{
      //console.log(april);
      this.april = april;
    })
  }
  deleteApril(event: any, j: model){
    this.aprilService.deleteApril(j);
    this.clearState();
  }
  editApril(event: any, j: model){
    this.editState = true;
    this.aprToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.aprToEdit = null;
  }
  updateApril(j: model){
    this.aprilService.updateApril(j);
    this.clearState();
  }

}
