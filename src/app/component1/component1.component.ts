import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  imports: [CommonModule],
  standalone: true
})
export class Component1Component implements OnInit {
  courseDetails: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.courseDetails = data.courseDetails;
    });
  }
}
