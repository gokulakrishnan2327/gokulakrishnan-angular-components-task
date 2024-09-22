import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Chart, LineController, PointElement, LinearScale, CategoryScale, LineElement } from 'chart.js';

Chart.register(LineController, PointElement, LinearScale, CategoryScale, LineElement);

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css'],
  standalone: true
})
export class Component3Component implements OnInit {
  attendance: any;
  chart: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.attendance = data.attendance;
      this.createAttendanceChart();
    });
  }

  createAttendanceChart(): void {
    const ctx = document.getElementById('attendanceChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["1/7", "8/7", "15/7", "22/7", "29/7", "5/8", "12/8", "14/10", "21/10"],  // X-axis labels for weeks
        datasets: [{
          label: 'Attendance',
          data: this.attendance.attendance,  // Attendance data for each week
          borderColor: 'rgb(177,100,215)',  // Line color
          backgroundColor: 'rgb(177,100,215)',  // Area color under line
          borderWidth: 2,
          pointBackgroundColor: 'rgb(44,56,75)',  // Dot color
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 5,
          fill: false,  
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 25,
              callback: function(value) { return value + '%'; }
            }
          }
        },
        layout: {
          padding: {
            top: 10,
            bottom: 10
          }
        }
      }
    });
  }
}
