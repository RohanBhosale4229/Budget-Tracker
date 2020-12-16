import { Component, OnInit } from '@angular/core';
import { AugService } from '../services/aug.service';
import { model } from '../model';

@Component({
  selector: 'app-addaug',
  templateUrl: './addaug.component.html',
  styleUrls: ['./addaug.component.css']
})
export class AddaugComponent implements OnInit {
  august: model = {
    title:'',
    value:undefined
  }
  constructor(private augustService: AugService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.august.title!='' && this.august.value!=undefined){
      this.augustService.addAugust(this.august);
      this.august.title='';
      this.august.value=undefined;
    }

  }

}
