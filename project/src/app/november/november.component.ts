import { Component, OnInit } from '@angular/core';
import { NovService } from '../services/nov.service';
import { model } from '../model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-november',
  templateUrl: './november.component.html',
  styleUrls: ['./november.component.css']
})
export class NovemberComponent implements OnInit {
  november!: model[];
  editState: boolean = false;
  novToEdit!: model | null;
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



  constructor(private novemberService: NovService) {}

  ngOnInit(): void {
    let current_user: model[]=[];
    this.novemberService.getNovember().subscribe(november =>{

      this.november = november;
      for(let i =0; i< this.november.length;i++){
        if(this.november[i].id===localStorage.getItem('userid')){
          current_user.push(this.november[i])
        }
      }
      this.november=current_user;
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
      for (let i = 0; i < this.november.length; i++){
        this.dataSource.datasets[0].data[i] = this.november[i].value;
        this.dataSource.labels[i] = this.november[i].title;
        this.dataSource.datasets[0].backgroundColor[i] = this.randomColors();
      }
    }
  deleteNovember(event: any, j: model){
    this.novemberService.deleteNovember(j);
    this.clearState();
    
  }
  editNovember(event: any, j: model){
    this.editState = true;
    this.novToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.novToEdit = null;
  }
  updateNovember(j: model){
    this.novemberService.updateNovember(j);
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
