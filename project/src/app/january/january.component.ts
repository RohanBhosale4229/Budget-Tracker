import { Component, OnInit } from '@angular/core';
import { JanService } from '../services/jan.service';
import { model } from '../model';
import { Chart } from 'chart.js';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-january',
  templateUrl: './january.component.html',
  styleUrls: ['./january.component.css']
})
export class JanuaryComponent implements OnInit {
  january!: model[];
  editState: boolean = false;
  janToEdit!: model | null;
  public myPieChart: any
  public myBarChart: any
  public myLineChart: any
  public dataSource = {
    datasets: [
        {

            data: [],
            backgroundColor: [

            ],
        }
    ],
    labels: [],
    fill: false
  } as any

  constructor(private januaryService: JanService) {}
  a=localStorage.getItem('userid');


  ngOnInit(): void {
    //let january = [this.jan.title,this.jan.value]
    let current_user:model[] =[]
    this.januaryService.getJanuary().subscribe(january =>{
      this.january = january;
      for (let i=0; i< this.january.length;i++){
        if (this.january[i].id===localStorage.getItem('userid')){
          current_user.push(this.january[i])
        }
      }
      this.january=current_user;
      current_user=[];
      this.getBudget();
      setTimeout(() => {
        this.createPie();
        this.createBar();
        this.createLine();
      }, 300);
      })
    }
    getBudget(){
      for (let i = 0; i < this.january.length; i++){

        this.dataSource.datasets[0].data[i] = this.january[i].value;
        this.dataSource.labels[i] = this.january[i].title;
        this.dataSource.datasets[0].backgroundColor[i] = this.randomColors();

    }
    }
  deleteJanuary(event: any, j: model){
    this.januaryService.deleteJanuary(j);
    this.clearState();

  }
  editJanuary(event: any, j: model){
    this.editState = true;
    this.janToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.janToEdit = null;
  }
  updateJanuary(j: model){
    this.januaryService.updateJanuary(j);
    this.clearState();
  }
  createPie() {
    if (this.myPieChart){
      this.myPieChart.destroy()
    }
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myPieChart = new Chart(ctx, {
        type: 'pie',
        data: this.dataSource
    });
  }
    createBar() {
      if(this.myBarChart){
        this.myBarChart.destroy()
      }
      const ctx = document.getElementById('myChart1') as HTMLCanvasElement;
      const myPieChart = new Chart(ctx, {
          type: 'bar',
          data: this.dataSource,
          options: {

            scales: {
              xAxes:[{
                stacked:true
              }],
              yAxes: [
                {
                  stacked:true
                }]
            }
          }
      });
    }
      createLine() {
        if(this.myLineChart){
          this.myLineChart.destroy()
        }
        const ctx = document.getElementById('myChart2') as HTMLCanvasElement;
        const myPieChart = new Chart(ctx, {
            type: 'line',
            data: this.dataSource,
            options: {
              legend: {
                display: false
              },
              scales: {
                yAxes: [
                  {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
                  }
                ]
              },
              elements: {
                  line: {
                          fill: false
                  }
              }
          }
        });
}
randomColors(){
  const r=Math.floor(Math.random()*255);
  const g=Math.floor(Math.random()*255);
  const b=Math.floor(Math.random()*255);
  return 'rgb('+r+','+g+','+b+')';
}


}
