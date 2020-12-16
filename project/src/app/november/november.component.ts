import { Component, OnInit } from '@angular/core';
import { NovService } from '../services/nov.service';
import { model } from '../model';

@Component({
  selector: 'app-november',
  templateUrl: './november.component.html',
  styleUrls: ['./november.component.css']
})
export class NovemberComponent implements OnInit {
  november!: model[];
  editState: boolean = false;
  novToEdit!: model | null;

  constructor(private novemberService: NovService) {}

  ngOnInit(): void {
    //let november = [this.nov.title,this.nov.value]
    this.novemberService.getNovember().subscribe(november =>{
      //console.log(november);
      this.november = november;
    })
  }
  deleteNovember(event: any, j: model){
    this.novemberService.deleteNovember(j);
    this.clearState();
  }
  editNovember(event: any, j: model){
    this.editState = true;
    this.novToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.novToEdit = null;
  }
  updateNovember(j: model){
    this.novemberService.updateNovember(j);
    this.clearState();
  }
}
