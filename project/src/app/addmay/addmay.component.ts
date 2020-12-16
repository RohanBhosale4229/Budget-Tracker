import { Component, OnInit } from '@angular/core';
import { MayService } from '../services/may.service';
import { model } from '../model';

@Component({
  selector: 'app-addmay',
  templateUrl: './addmay.component.html',
  styleUrls: ['./addmay.component.css']
})
export class AddmayComponent implements OnInit {
  may: model = {
    title:'',
    value:undefined
  }
  constructor(private mayService: MayService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.may.title!='' && this.may.value!=undefined){
      this.mayService.addMay(this.may);
      this.may.title='';
      this.may.value=undefined;
    }

  }

}
