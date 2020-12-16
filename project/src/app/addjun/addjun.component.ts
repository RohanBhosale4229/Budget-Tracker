import { Component, OnInit } from '@angular/core';
import { JunService } from '../services/jun.service';
import { model } from '../model';

@Component({
  selector: 'app-addjun',
  templateUrl: './addjun.component.html',
  styleUrls: ['./addjun.component.css']
})
export class AddjunComponent implements OnInit {
  june: model = {
    title:'',
    value:undefined
  }
  constructor(private juneService: JunService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.june.title!='' && this.june.value!=undefined){
      this.juneService.addJune(this.june);
      this.june.title='';
      this.june.value=undefined;
    }

  }

}
