import { Component, OnInit, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { DataService } from '../data.service';
import { isPlatformBrowser } from '@angular/common';
import { Chart, BarController, LinearScale, CategoryScale, BarElement,Filler } from 'chart.js';
import { CommonModule } from '@angular/common';




Chart.register(BarController, LinearScale, CategoryScale, BarElement,Filler);

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class Component2Component implements OnInit, AfterViewInit {
  assessmentProgress: any;
  chart: any;
  isBrowser: boolean;

  constructor(
    private dataService: DataService,
    @Inject(PLATFORM_ID) private platformId: Object 
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId); // Check if running in a browser
  }

  ngOnInit(): void {
    // Fetch data from the service and initialize assessmentProgress
    this.dataService.getData().subscribe(data => {
      // Check if assessmentProgress data is available
      if (data && data.assessmentProgress) {
        this.assessmentProgress = data.assessmentProgress.progress;
      } else {
        // Use hardcoded values if data is not available
        this.assessmentProgress = {
          assignment: { pending: 30, completed: 70 },
          quiz: { pending: 40, completed: 60 },
          presentation: { pending: 0, completed: 80 },
          lab: { pending: 0, completed: 50 },
          viva: { pending: 40, completed: 0 }
        };
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.createAssessmentChart();
    }
  }

  createAssessmentChart(): void {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const ctx = document.getElementById('assessmentChart') as HTMLCanvasElement;
      if (ctx) {
        this.chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Assignment', 'Quiz', 'Presentation', 'Lab', 'Viva'], // X-axis labels
            datasets: [
              {
                label: 'Pending',
                data: [
                  this.assessmentProgress.assignment.pending,
                  this.assessmentProgress.quiz.pending,
                  this.assessmentProgress.presentation.pending,
                  this.assessmentProgress.lab.pending,
                  this.assessmentProgress.viva?.pending || 0 // Add Viva if available
                ],
                backgroundColor: 'rgb(232,232,232)', // White for pending
                borderColor: 'rgb(232,232,232)',
                borderWidth: 1
              },
              {
                label: 'Completed',
                data: [
                  this.assessmentProgress.assignment.completed,
                  this.assessmentProgress.quiz.completed,
                  this.assessmentProgress.presentation.completed,
                  this.assessmentProgress.lab.completed,
                  this.assessmentProgress.viva?.completed || 0 // Add Viva if available
                ],
                backgroundColor: 'rgb(145,176,124)', // Green for completed
                borderColor: 'rgb(145,176,124)',
                borderWidth: 1
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 25, // Y-axis steps 0, 25, 50, 75, 100
                  callback: function(value) { return value + '%'; } // Display % sign on Y-axis
                }
              }
            },
            layout: {
              padding: {
                top: 50 // Add padding for custom legend
              }
            }
          }
        });
      }
    }
  }
}
