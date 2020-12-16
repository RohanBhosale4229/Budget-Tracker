import { Component, OnInit } from '@angular/core';
import { JanService } from '../services/jan.service';
import { model } from '../model';

@Component({
  selector: 'app-addjan',
  templateUrl: './addjan.component.html',
  styleUrls: ['./addjan.component.css']
})
export class AddjanComponent implements OnInit {
  january: model = {
    title:'',
    value:undefined
  }
  constructor(private januaryService: JanService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.january.title!='' && this.january.value!=undefined){
      this.januaryService.addJanuary(this.january);
      this.january.title='';
      this.january.value=undefined;
    }

  }
}
