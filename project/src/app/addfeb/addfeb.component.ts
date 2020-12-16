import { Component, OnInit } from '@angular/core';
import { FebService } from '../services/feb.service';
import { model } from '../model';

@Component({
  selector: 'app-addfeb',
  templateUrl: './addfeb.component.html',
  styleUrls: ['./addfeb.component.css']
})
export class AddfebComponent implements OnInit {
  february: model = {
    title:'',
    value:undefined
  }
  constructor(private februaryService: FebService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.february.title!='' && this.february.value!=undefined){
      this.februaryService.addFebruary(this.february);
      this.february.title='';
      this.february.value=undefined;
    }

  }

}
