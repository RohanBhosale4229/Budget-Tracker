import { Component, OnInit } from '@angular/core';
import { JulService } from '../services/jul.service';
import { model } from '../model';

@Component({
  selector: 'app-july',
  templateUrl: './july.component.html',
  styleUrls: ['./july.component.css']
})
export class JulyComponent implements OnInit {
  july!: model[];
  editState: boolean = false;
  julToEdit!: model | null;

  constructor(private julyService: JulService) {}

  ngOnInit(): void {
    //let july = [this.jul.title,this.jul.value]
    this.julyService.getJuly().subscribe(july =>{
      //console.log(july);
      this.july = july;
    })
  }
  deleteJuly(event: any, j: model){
    this.julyService.deleteJuly(j);
    this.clearState();
  }
  editJuly(event: any, j: model){
    this.editState = true;
    this.julToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.julToEdit = null;
  }
  updateJuly(j: model){
    this.julyService.updateJuly(j);
    this.clearState();
  }

}
