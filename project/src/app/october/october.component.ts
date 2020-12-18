import { Component, OnInit } from '@angular/core';
import { OctService } from '../services/oct.service';
import { model } from '../model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-october',
  templateUrl: './october.component.html',
  styleUrls: ['./october.component.css']
})
export class OctoberComponent implements OnInit {
  october!: model[];
  editState: boolean = false;
  octToEdit!: model | null;
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

  constructor(private octoberService: OctService) {}

  ngOnInit(): void {
    let current_user: model[]=[];
    this.octoberService.getOctober().subscribe(october =>{

      this.october = october;
      for(let i =0; i< this.october.length;i++){
        if(this.october[i].id===localStorage.getItem('userid')){
          current_user.push(this.october[i])
        }
      }
      this.october=current_user;
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
      for (let i = 0; i < this.october.length; i++){
        this.dataSource.datasets[0].data[i] = this.october[i].value;
        this.dataSource.labels[i] = this.october[i].title;
        this.dataSource.datasets[0].backgroundColor[i] = this.randomColors();
      }
    }
  deleteOctober(event: any, j: model){
    this.octoberService.deleteOctober(j);
    this.clearState();
    
  }
  editOctober(event: any, j: model){
    this.editState = true;
    this.octToEdit = j;
  }
  clearState(){
    this.editState = false;
    this.octToEdit = null;
  }
  updateOctober(j: model){
    this.octoberService.updateOctober(j);
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
