import { Component, OnInit } from '@angular/core';
import { AprService } from '../services/apr.service';
import { model } from '../model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-april',
  templateUrl: './april.component.html',
  styleUrls: ['./april.component.css']
})
export class AprilComponent implements OnInit {
  april!: model[];
  editState: boolean = false;
  aprToEdit!: model | null;
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


  constructor(private aprilService: AprService) {}

  ngOnInit(): void {
    let current_user: model[]=[];
    this.aprilService.getApril().subscribe(april =>{

      this.april = april;
      for (let i=0; i<this.april.length;i++){
        if(this.april[i].id===localStorage.getItem['userid']){
          current_user.push(this.april[i]);
        }
      }
      this.april=current_user;
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
      for (let i = 0; i < this.april.length; i++){
        this.dataSource.datasets[0].data[i] = this.april[i].value;
        this.dataSource.labels[i] = this.april[i].title;
        this.dataSource.datasets[0].backgroundColor[i] = this.randomColors();
      }
    }

  deleteApril(event: any, j: model){
    this.aprilService.deleteApril(j);
    this.clearState();

  }
  editApril(event: any, j: model){
    this.editState = true;
    this.aprToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.aprToEdit = null;
  }
  updateApril(j: model){
    this.aprilService.updateApril(j);
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

