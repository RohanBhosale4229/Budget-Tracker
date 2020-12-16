import { Component, OnInit } from '@angular/core';
import { NovService } from '../services/nov.service';
import { model } from '../model';


@Component({
  selector: 'app-addnov',
  templateUrl: './addnov.component.html',
  styleUrls: ['./addnov.component.css']
})
export class AddnovComponent implements OnInit {
  november: model = {
    title:'',
    value:undefined
  }
  constructor(private novemberService: NovService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.november.title!='' && this.november.value!=undefined){
      this.novemberService.addNovember(this.november);
      this.november.title='';
      this.november.value=undefined;
    }

  }

}
