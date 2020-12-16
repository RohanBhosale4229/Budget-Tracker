import { Component, OnInit } from '@angular/core';
import { MarService } from '../services/mar.service';
import { model } from '../model';

@Component({
  selector: 'app-addmar',
  templateUrl: './addmar.component.html',
  styleUrls: ['./addmar.component.css']
})
export class AddmarComponent implements OnInit {
  march: model = {
    title:'',
    value:undefined
  }
  constructor(private marchService: MarService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.march.title!='' && this.march.value!=undefined){
      this.marchService.addMarch(this.march);
      this.march.title='';
      this.march.value=undefined;
    }

  }

}
