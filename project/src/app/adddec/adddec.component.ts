import { Component, OnInit } from '@angular/core';
import { DecService } from '../services/dec.service';
import { model } from '../model';


@Component({
  selector: 'app-adddec',
  templateUrl: './adddec.component.html',
  styleUrls: ['./adddec.component.css']
})
export class AdddecComponent implements OnInit {
  december: model = {
    title:'',
    value:undefined
  }
  constructor(private decemberService: DecService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.december.title!='' && this.december.value!=undefined){
      this.decemberService.addDecember(this.december);
      this.december.title='';
      this.december.value=undefined;
    }

  }

}
