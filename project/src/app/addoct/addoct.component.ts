import { Component, OnInit } from '@angular/core';
import { OctService } from '../services/oct.service';
import { model } from '../model';

@Component({
  selector: 'app-addoct',
  templateUrl: './addoct.component.html',
  styleUrls: ['./addoct.component.css']
})
export class AddoctComponent implements OnInit {
  october: model = {
    title:'',
    value:undefined
  }
  constructor(private octoberService: OctService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.october.title!='' && this.october.value!=undefined){
      this.octoberService.addOctober(this.october);
      this.october.title='';
      this.october.value=undefined;
    }

  }

}
