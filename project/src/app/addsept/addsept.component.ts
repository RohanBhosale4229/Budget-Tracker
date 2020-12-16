import { Component, OnInit } from '@angular/core';
import { SeptService } from '../services/sept.service';
import { model } from '../model';

@Component({
  selector: 'app-addsept',
  templateUrl: './addsept.component.html',
  styleUrls: ['./addsept.component.css']
})
export class AddseptComponent implements OnInit {
  september: model = {
    title:'',
    value:undefined
  }
  constructor(private septemberService: SeptService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.september.title!='' && this.september.value!=undefined){
      this.septemberService.addSeptember(this.september);
      this.september.title='';
      this.september.value=undefined;
    }

  }


}
