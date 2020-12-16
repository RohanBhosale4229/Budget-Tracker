import { Component, OnInit } from '@angular/core';
import { JulService } from '../services/jul.service';
import { model } from '../model';

@Component({
  selector: 'app-addjul',
  templateUrl: './addjul.component.html',
  styleUrls: ['./addjul.component.css']
})
export class AddjulComponent implements OnInit {
  july: model = {
    title:'',
    value:undefined
  }
  constructor(private julyService: JulService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.july.title!='' && this.july.value!=undefined){
      this.julyService.addJuly(this.july);
      this.july.title='';
      this.july.value=undefined;
    }

  }

}
