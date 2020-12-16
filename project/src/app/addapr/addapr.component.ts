import { Component, OnInit } from '@angular/core';
import { AprService } from '../services/apr.service';
import { model } from '../model';

@Component({
  selector: 'app-addapr',
  templateUrl: './addapr.component.html',
  styleUrls: ['./addapr.component.css']
})
export class AddaprComponent implements OnInit {
  april: model = {
    title:'',
    value:undefined
  }
  constructor(private aprilService: AprService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.april.title!='' && this.april.value!=undefined){
      this.aprilService.addApril(this.april);
      this.april.title='';
      this.april.value=undefined;
    }

  }
}
