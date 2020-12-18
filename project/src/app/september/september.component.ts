import { Component, OnInit } from '@angular/core';
import { SeptService } from '../services/sept.service';
import { model } from '../model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-september',
  templateUrl: './september.component.html',
  styleUrls: ['./september.component.css']
})
export class SeptemberComponent implements OnInit {
  september!: model[];
  editState: boolean = false;
  sepToEdit!: model | null;
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

  constructor(private septemberService: SeptService) {}

  ngOnInit(): void {
    let current_user: model[]=[];
    this.septemberService.getSeptember().subscribe(september =>{

      this.september = september;
      for(let i =0; i< this.september.length;i++){
        if(this.september[i].id===localStorage.getItem('userid')){
          current_user.push(this.september[i])
        }
      }
      this.september=current_user;
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
      for (let i = 0; i < this.september.length; i++){
        this.dataSource.datasets[0].data[i] = this.september[i].value;
        this.dataSource.labels[i] = this.september[i].title;
        this.dataSource.datasets[0].backgroundColor[i] = this.randomColors();
      }
    }
  deleteSeptember(event: any, j: model){
    this.septemberService.deleteSeptember(j);
    this.clearState();

  }
  editSeptember(event: any, j: model){
    this.editState = true;
    this.sepToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.sepToEdit = null;
  }
  updateSeptember(j: model){
    this.septemberService.updateSeptember(j);
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
                xAxes:[{
                  stacked:true
                }],
                yAxes: [
                  {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left',
                    stacked:true
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
